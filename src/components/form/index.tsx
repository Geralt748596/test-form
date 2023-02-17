import { memo, useCallback, useState } from 'react';

import useForm from '../../hooks/useForm';
import { handleFakeReauest } from '../../services';
import { FieldsName, Inputs, NormalizerRecords } from '../../types';

import { Avatar } from '../avatar';

import { Input } from '../input';

import styles from './styles.module.scss';

const inputsArray = [
    {
        name: FieldsName.FirstName,
        type: 'text',
        required: true,
        label: 'First name',
        maxLength: 25,
    },
    {
        name: FieldsName.SecondName,
        type: 'text',
        required: true,
        label: 'Second name',
        maxLength: 25,
    },
    {
        name: FieldsName.Age,
        type: 'number',
        label: 'Age',
    },
];

const normalizer: NormalizerRecords = {
    [FieldsName.Age]: (value: string) => {
        return value.length < 4
    },
}

export const Form = memo(() => {

    const [isSuccess, setIsSuccess] = useState(false);

    const onSumbit = useCallback((inputs: Inputs) => {
        handleFakeReauest(inputs)
            .then(() => {
                setIsSuccess(true);
            });
    }, [setIsSuccess]);

    const { handleInputChange, handleSubmit, inputs } = useForm(onSumbit, normalizer);

    return (
        <div className={styles.wrapper}>
            <Avatar isTurned={isSuccess} />
            <form className={`${styles.formWrapper} ${isSuccess ? styles.hide : ''}`} onSubmit={handleSubmit}>
                {inputsArray.map((input) =>
                        <Input
                            {...input}
                            key={input.name}
                            onChange={handleInputChange}
                            value={inputs[input.name] || ''}
                        />
                    )}
                <button className={styles.submit} type='submit'>Отправить</button>
            </form>
        </div>
    )
});
