import * as vscode from 'vscode';
import { all_snippets, SnippetItem, Snippets  } from './data/snippets';

export async function activate(context: vscode.ExtensionContext) {

    all_snippets.forEach((item:Snippets) => {
        const disposable = vscode.commands.registerCommand(`ansible-ontap-snippets.search-${item.version}`, async () => {
            const commands = item.snippets.map((item: SnippetItem) => ({
                label: item.label,
                detail: item.description,
            }));
            const selected = await vscode.window.showQuickPick<{ label: string; detail: string }>(commands, {
                matchOnDetail: true,
                placeHolder: `Search for Ansible ONTAP Snippet (${item.version})`,
                ignoreFocusOut: true,
            });
            if (!selected) {
                return;
            }

            let editor = vscode.window.activeTextEditor;
            if (!editor) {
                const doc = await vscode.workspace.openTextDocument({ content: '' });
                editor = await vscode.window.showTextDocument(doc);
            }

            const position = editor.selection.active;
            const lineText = editor.document.lineAt(position.line).text;

            editor.edit(editBuilder => {
                const snippet = item.snippets.find(s => s.label === selected.label);
                if( !snippet ) {
                    return;
                }
                if (lineText.trim().length > 0) {
                    // If line has text, insert command on a new line below and comment above
                    let newLine = position.line + 1;
                    while (newLine < editor.document.lineCount && editor.document.lineAt(newLine).text.trim().length > 0) {
                        newLine++;
                    }
                    editBuilder.insert(new vscode.Position(newLine, 0), '\n' + snippet?.body);
                } else {
                    // If line is empty, insert command and comment at cursor
                    editBuilder.insert(position, snippet?.body);
                }
            });
        });
        context.subscriptions.push(disposable);
    })
}

export function deactivate() { }