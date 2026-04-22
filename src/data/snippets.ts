import { snippets_23_4_0 } from "./snippets-23.4.0";

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
        version: '23.4.0',
        snippets: snippets_23_4_0
    }
]