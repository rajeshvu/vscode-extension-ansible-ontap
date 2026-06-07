import { snippets_23_5_0 } from "./snippets-23.5.0";

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
        version: '23.5.0',
        snippets: snippets_23_5_0
    }
]