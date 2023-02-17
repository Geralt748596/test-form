import { useCallback, useState, FormEvent, ChangeEvent } from 'react';

import { FieldsName, Inputs, NormalizerRecords } from '../types';

const useForm = (callback: (inputs: Inputs) => void, normalizer: NormalizerRecords = {} as NormalizerRecords) => {
    const [inputs, setInputs] = useState<Inputs>({} as Inputs);

    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        callback(inputs);
    }, [callback, inputs]);

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setInputs(inputs => {
            const fieldName = event.target.name;
            const normalizeCallback = normalizer[fieldName as FieldsName];
            const value = event.target.value;
            const prevValue = inputs[fieldName as FieldsName];
            const newValue = normalizeCallback ?
                normalizeCallback(value) ?
                    value :
                    prevValue
                : value;

            return {
                ...inputs,
                [fieldName]: newValue,
            }
        });
    }, [setInputs, normalizer]);

    return {
        inputs,
        handleInputChange,
        handleSubmit,
    };
};

export default useForm;
