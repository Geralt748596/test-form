import { Inputs, FakeBodyResponse, FieldsName, RequestParams } from '../types';

export const handleFakeReauest = (inputs: RequestParams): Promise<FakeBodyResponse> => {
    const body = JSON.stringify(inputs);
    return new Promise((res) => setTimeout(() => {
        console.log('REQUEST_WITH_BODY: ', body);
        res({ isSuccess: true, inputs: body })
    }, 1000));
};

export function generateDataForRequest (inputs: Inputs) {
    return Object.keys(inputs).reduce((acc, inputKey) => {
        const name = inputKey as FieldsName;
        acc[name] = inputs[name].value as string;
        return acc;
    }, {} as RequestParams)
};