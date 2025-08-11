import * as vscode from 'vscode';
import { SnippetItem, SNIPPETS, Snippets } from './data/snippets';
import { ModuleOptions, OptionDefinition, Options, MODULE_OPTIONS } from './data/options';

export async function activate(context: vscode.ExtensionContext) {
    console.log(MODULE_OPTIONS);
    const hoverProvider = vscode.languages.registerHoverProvider(
        [
            { language: 'yaml', scheme: 'file' }, 
            { language: 'yaml', scheme: 'untitled' }
        ],
        new SnippetHoverProvider()
    );
    context.subscriptions.push(hoverProvider);

    //Completion provider for the command properties and values
    const completionProvider = vscode.languages.registerCompletionItemProvider(
        [
            { language: 'yaml', scheme: 'file' }, 
            { language: 'yaml', scheme: 'untitled' }
        ],
        new SnippetCompletionProvider(),
        ':' // Trigger character
    );
    context.subscriptions.push(completionProvider);

    //Completion provider for the commands
    const taskCompletionProvider = vscode.languages.registerCompletionItemProvider(
        [
            { language: 'yaml', scheme: 'file' },
            { language: 'yaml', scheme: 'untitled' }
        ],
        new SnippetTaskCompletionProvider()
    );
    context.subscriptions.push(taskCompletionProvider);    

    // Register search command
    for (const item of SNIPPETS) {
        const disposable = vscode.commands.registerCommand(
            `ansible-ontap-snippets.search-${item.version}`,
            () => handleSnippetCommand(item)
        );
        context.subscriptions.push(disposable);
    }
}

class SnippetHoverProvider implements vscode.HoverProvider {
    provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
        const word = getWordAt(document, position);
        if (!word) return;

        const version = findModuleVersion(document, position);
        if (!version) return;

        const moduleOptions = MODULE_OPTIONS[version];

        // Hover over module name
        if (moduleOptions[word]) {
            const options = moduleOptions[word];
            const markdownContent = new vscode.MarkdownString(formatModuleMarkdown(word, options, version));
            markdownContent.isTrusted = true;
            return new vscode.Hover(markdownContent);
        }

        // Hover over property
        const moduleName = findModuleName(document, position);
        if (!moduleName) return;

        const options = moduleOptions[moduleName];
        const option = options?.[word];
        if (!option) return;

        const markdownContent = new vscode.MarkdownString(formatOptionMarkdown(word, option));
        markdownContent.isTrusted = true;
        return new vscode.Hover(markdownContent);
    }
}

class SnippetCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        const version = findModuleVersion(document, position);
        if (!version) return [];

        const moduleOptions = MODULE_OPTIONS[version];
        const moduleName = findModuleName(document, position);
        if (!moduleName) return [];

        const options = moduleOptions[moduleName];
        if (!options) return [];

        const lineText = document.lineAt(position.line).text;
        const isTypingValue = lineText.includes(':') && position.character > lineText.indexOf(':');

        return isTypingValue
            ? getValueCompletionItems(options, lineText)
            : getPropertyCompletionItems(options);
    }
}


class SnippetTaskCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.CompletionItem[]> {
        const line = document.lineAt(position);
        const lineText = line.text;
        const lineIsNewTask = /^\s*(ontap:)\s*/.test(lineText);

        if (!lineIsNewTask) {
            return undefined;
        }

        const completionItems: vscode.CompletionItem[] = [];
        const uniqueLabels = new Set<string>();

        const replaceRange = new vscode.Range(new vscode.Position(line.lineNumber,0), position);

        for (const item of SNIPPETS) {
            for (const snippet of item.snippets) {
                if (!uniqueLabels.has(snippet.label)) {
                    const completionItem = new vscode.CompletionItem(
                        snippet.label,
                        vscode.CompletionItemKind.Snippet
                    );

                    completionItem.filterText = 'ontap:'+ snippet.label;
                    completionItem.range = replaceRange;
                    completionItem.insertText = new vscode.SnippetString(snippet.body);
                    completionItem.detail = snippet.description;
                    completionItems.push(completionItem);
                    uniqueLabels.add(snippet.label);
                }
            }
        }
        return completionItems;
    }
}

async function handleSnippetCommand(item: Snippets) {
    try {
        const selected = await pickSnippet(item);
        if (!selected) return;

        const editor = await getOrCreateEditor();
        const snippet = item.snippets.find(s => s.label === selected.label);
        if (!snippet) return;

        await insertSnippet(editor, snippet.body);

    } catch (err) {
        vscode.window.showErrorMessage(`Error inserting snippet: ${err}`);
    }
}

function pickSnippet(item: Snippets) {
    return vscode.window.showQuickPick(
        item.snippets.map((sn: SnippetItem) => ({
            label: sn.label,
            detail: sn.description
        })),
        {
            matchOnDetail: true,
            placeHolder: `Search for Ansible ontap Snippet (${item.version})`,
            ignoreFocusOut: true
        }
    );
}

async function getOrCreateEditor() {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        const doc = await vscode.workspace.openTextDocument({ content: '' });
        editor = await vscode.window.showTextDocument(doc);
    }
    return editor;
}

async function insertSnippet(editor: vscode.TextEditor, body: string) {
    const snippetString = new vscode.SnippetString(body);
    const position = editor.selection.active;
    const lineText = editor.document.lineAt(position.line).text;

    if (lineText.trim()) {
        const nextLine = findNextEmptyLine(editor.document, position.line);
        await editor.insertSnippet(snippetString, new vscode.Position(nextLine, 0));
    } else {
        await editor.insertSnippet(snippetString, position);
    }
}

function findNextEmptyLine(document: vscode.TextDocument, startLine: number): number {
    for (let i = startLine + 1; i < document.lineCount; i++) {
        if (!document.lineAt(i).text.trim()) {
            return i;
        }
    }
    return document.lineCount;
}

function getWordAt(document: vscode.TextDocument, position: vscode.Position) {
    const range = document.getWordRangeAtPosition(position, /[a-zA-Z0-9_.-]+/);
    return range ? document.getText(range) : null;
}

function findModuleName(document: vscode.TextDocument, position: vscode.Position) {
    for (let i = position.line; i >= 0; i--) {
        const match = document.lineAt(i).text.match(/^\s*([a-zA-Z0-9_.-]+)\s*:/);
        if (match && match[1].startsWith('netapp.ontap.')) {
            return match[1];
        }
    }
    return null;
}

function findModuleVersion(document: vscode.TextDocument, position: vscode.Position): string | null {
    const moduleName = findModuleName(document, position);
    if (!moduleName) return null;
    
    for (const [version, modules] of Object.entries(MODULE_OPTIONS)) {
        if (modules[moduleName]) {
            return version;
        }
    }
    return null;
}

function getValueCompletionItems(options: Options, lineText: string) {
    const propMatch = lineText.match(/^\s*([a-zA-Z0-9_.-]+)\s*:/);
    if (!propMatch) return [];
    const propertyName = propMatch[1];
    const option: OptionDefinition = options[propertyName];
    if (!option) return [];

    let choices: string[] = option.choices?.map((c: any) => c.toString()) ?? [];
    if (!choices.length) {
        switch (option.type) {
            case 'str': choices = [`'{{ ${propertyName} }}'`]; break;
            case 'bool': choices = ['true', 'false']; break;
            case 'list': choices = [`\n - `]; break;
        }
    }

    return choices.map(choice => {
        const choiceText = ' ' + choice;
        const ci = new vscode.CompletionItem(choiceText, vscode.CompletionItemKind.Value);
        ci.insertText = choiceText;
        return ci;
    });
}

function getPropertyCompletionItems(options: Options) {
    return Object.keys(options).map(optName => {
        const ci = new vscode.CompletionItem(optName, vscode.CompletionItemKind.Property);
        const description = options[optName].description instanceof Array ? options[optName].description?.join(' ') || '' : options[optName].description;
        ci.detail = description;
        return ci;
    });
}

function formatModuleMarkdown(moduleName: string, moduleOptions: ModuleOptions, version: string): string {
    const mdLines: string[] = [];

    mdLines.push(`### <span style="color:#33cc66;">${moduleName}</span> - v${version}`);
    mdLines.push(`**Available Options:**\n`);

    for (const [optionName, option] of Object.entries(moduleOptions)) {
        mdLines.push(`- **<span style="color:#e6954e;">${optionName}</span>**  - Type : <span style="color:#4e9fe6;">\`${option.type}\`</span>`);

        if (option.description) {
            const descriptionText = option.description.join(`\n  - `);
            mdLines.push(`  - ${descriptionText}`);
        }

        if (option.choices) {
            const choicesFormatted = option.choices.map((c: any) => `\`${c}\``).join(', ');
            mdLines.push(`  - <span style="color:#9B7EBD;">Choices:</span> ${choicesFormatted}`);
        }
    }

    return mdLines.join('\n');
}

function formatOptionMarkdown(optionName: string, option: any, indentLevel: number = 0): string {
    const mdLines: string[] = [];
    const indent = '  '.repeat(indentLevel);

    const type = option.type ? `Type : <span style="color:#c0b000;">\`${option.type}\`</span>` : '';

    mdLines.push(`${indent}- <span style="color:#e6954e;">**\`${optionName}\`**</span> - ${type}`);

    if (option.description) {
        const descriptionText = option.description.join(`\n${indent}  - `);
        mdLines.push(`${indent}  - ${descriptionText}`);
    }

    if (option.required !== undefined) {
        const requiredColor = option.required ? '#ff5555' : '#4e9fe6';
        const requiredLabel = option.required ? `**Required**` : `Required`;
        mdLines.push(`${indent}  - <span style="color:${requiredColor};">_${requiredLabel}_</span> : \`${option.required}\``);
    }

    if (option.choices) {
        const choicesFormatted = option.choices.map((choice: any) => `${choice}`).join(', ');
        mdLines.push(`${indent}  - <span style="color:#9B7EBD;">_Choices_</span> : \`${choicesFormatted}\``);
    }

    if (option.default !== undefined) {
        mdLines.push(`${indent}  - <span style="color:#bd93f9;">_Default_</span> : \`${option.default}\``);
    }

    if (option.setoptions && typeof option.suboptions === 'object') {
        mdLines.push(`${indent}  - <span style="color:#bd93f9;">**Suboptions:**</span>`);
        for (const [subName, subOption] of Object.entries(option.suboptions)) {
            mdLines.push(formatOptionMarkdown(subName, subOption, indentLevel + 1));
        }
    }
    return mdLines.join('\n');
}