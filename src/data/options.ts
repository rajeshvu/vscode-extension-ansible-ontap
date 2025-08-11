import { options_23_0_0 } from "./options-23.0.0";

export interface OptionSubOptions {
    [subOption: string]: OptionDefinition;
}

export interface OptionDefinition {
    description: string[] | string; // Array of description lines
    required?: boolean;
    type?: string;
    elements?: string;
    choices?: (string | number | boolean)[];
    default?: string [] | string | number | boolean;
    suboptions?: OptionSubOptions;
    [key: string]: any; // For any extra fields
}

export interface Options {
    [optionName: string]: OptionDefinition;
}

export interface ModuleOptions {
    [moduleName: string]: Options;
}

export const MODULE_OPTIONS: Record<string, ModuleOptions> = {
    '23.0.0': options_23_0_0,
};