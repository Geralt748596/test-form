import { memo, useCallback, useState } from 'react';

import useForm from '../../hooks/useForm';
import { handleFakeReauest, generateDataForRequest } from '../../services';
import { FieldsName, Inputs } from '../../types';
import { required, emailValidation, passwordValidation, cn } from '../../utils';

import { Avatar } from '../avatar';

import { Input } from '../input';

import styles from './styles.module.scss';

const inputsArray = [
    {
        name: FieldsName.Email,
        label: 'Email',
        maxLength: 25,
        rules: [required, emailValidation],
    },
    {
        name: FieldsName.Password,
        label: 'Password',
        maxLength: 22,
        type: 'password',
        rules: [passwordValidation],
    }
];

export const Form = memo(({ onSuccess }: Props) => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSumbit = useCallback((inputs: Inputs) => {
        setIsLoading(true);
        handleFakeReauest(generateDataForRequest(inputs))
            .then(() => {
                setIsSuccess(true);
                onSuccess();
            });
    }, [onSuccess]);

    const { handleSubmit, isFormInFocus, inputs } = useForm(inputsArray, onSumbit);

    return (
        <div className={styles.wrapper}>
            <Avatar isTurned={isSuccess} />
            <form
                className={`${styles.formWrapper} ${isSuccess ? styles.hide : ''} ${isFormInFocus ? styles.focused : ''}`}
                onSubmit={handleSubmit}
            >
                {inputsArray.map((input) => {
                    return (
                        <Input
                            {...inputs[input.name]}
                            key={input.name}
                            ref={undefined}
                        />
                    )
                })}
                <button className={cn(styles.submit, { [styles.disabled]: isLoading })} type='submit'>
                    {isLoading ? '...' : 'Signup'}
                </button>
            </form>
        </div>
    )
});

type Props = {
    onSuccess: () => void;
}
