import { snippets_23_0_0 } from "./snippets-23.0.0";
import { snippets_23_1_0 } from "./snippets-23.1.0";

export interface SnippetItem {
    label: string;
    description: string;
    body: string;
}

export interface Snippets {
    version: string;
    snippets: SnippetItem[];
}

export const all_snippets: Snippets[] = [
    {
        version: '23.0.0',
        snippets: snippets_23_0_0
    },
    {
        version: '23.1.0',
        snippets: snippets_23_1_0
    },
]