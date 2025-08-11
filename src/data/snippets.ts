import { snippets_22_14_0 } from "./snippets-22.14.0";

export interface SnippetItem {
    label: string;
    description: string;
    body: string;
}

export interface Snippets {
    version: string;
    snippets: SnippetItem[];
}

export const SNIPPETS: Snippets[] = [
    {
        version: '22.14.0',
        snippets: snippets_22_14_0
    }
]