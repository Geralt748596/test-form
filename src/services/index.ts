import { Inputs, FakeBodyResponse } from '../types';

export const handleFakeReauest = (inputs: Inputs): Promise<FakeBodyResponse> => {
    const body = JSON.stringify(inputs);
    return new Promise((res) => setTimeout(() => {
        console.log('REQUEST_WITH_BODY: ', body);
        res({ isSuccess: true, inputs: body })
    }, 1000));
}