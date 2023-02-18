import { HTMLProps } from "react";

export type Input = HTMLProps<HTMLInputElement> & {
    label: string;
    name: FieldsName;
    focused?: boolean;
    error?: string;
    rules?: RulesCallback[];
};
export type Inputs = Record<FieldsName, Input>;
export type InputsErrors = Partial<Record<FieldsName, string>>;

export type Rules = Partial<Record<FieldsName, RulesCallback[]>>;

export type RulesCallback = (value: string, field: string) => string;

export enum FieldsName {
    Email = 'email',
    Password = 'password',
}

export type FakeBodyResponse = {
    isSuccess: boolean;
    inputs: string;
}

export type FocusedFields = Partial<Record<FieldsName, boolean>>;

export type ClassItem = string | { [key: string]: boolean };

export type RequestParams = Record<FieldsName, string>;