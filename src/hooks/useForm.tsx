import { useCallback, useState, FormEvent, ChangeEvent, FocusEvent } from 'react';

import { FieldsName, Inputs, Input } from '../types';

const useForm = (initialInputs: Input[], callback: (inputs: Inputs) => void) => {
    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setInputs(inputs => {
            const fieldName = event.target.name as FieldsName;
            const value = event.target.value;
            return {
                ...inputs,
                [fieldName]: { ...inputs[fieldName], value, error: '' },
            }
        });
    }, []);

    const handleFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
        const fieldName = e.target.name as FieldsName;
        setInputs((inputs) => ({ ...inputs, [fieldName]: { ...inputs[fieldName], focused: true } }));
        setFormInFocus(true);
    }, []);

    const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
        const fieldName = e.target.name as FieldsName;
        setInputs((inputs) => ({ ...inputs, [fieldName]: { ...inputs[fieldName], focused: false } }));
        setFormInFocus(false);
    }, []);

    const generateInputs = () => {
        return initialInputs.reduce((acc, input) => {
            acc[input.name] = {
                ...input,
                onChange: handleInputChange,
                onFocus: handleFocus,
                onBlur: handleBlur,
                error: '',
                focused: false,
                value: '',
            }
            return acc;
        }, {} as Inputs);
    };

    const [inputs, setInputs] = useState<Inputs>(() => generateInputs());
    const [isFormInFocus, setFormInFocus] = useState<boolean>(false);

    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let isError = false;
        const newInputs = { ...inputs };
        
        for (const inputKey in inputs) {
            const name = inputKey as FieldsName;
            const rules = inputs[name].rules;
            if (rules) {
                for (const rule of rules) {
                    const value = inputs[name].value as string;
                    const error = rule(value, name);
                    if (error) {
                        isError = true;
                        newInputs[name].error = error;
                    }
                }
            }
        }

        !isError ? callback(inputs) : setInputs(newInputs);
    }, [callback, inputs]);

    return {
        inputs,
        isFormInFocus,
        handleSubmit,
    };
};

export default useForm;
