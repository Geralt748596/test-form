export type Inputs = Record<FieldsName, string>;
export type NormalizerRecords = Partial<Record<FieldsName, NormalizerCallback>>;

export type NormalizerCallback = (value: string) => boolean;

export enum FieldsName {
    FirstName = 'first-name',
    SecondName = 'second-name',
    Age = 'age',
}

export type FakeBodyResponse = {
    isSuccess: boolean;
    inputs: string;
}