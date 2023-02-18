import { memo } from 'react';
import { Input as InputProps } from '../../types';

import { cn } from '../../utils';

import styles from './styles.module.scss';

export const Input = memo(({ label, error, focused, rules, value, ...props }: Props) => {

    return (
        <div className={cn(styles.inputBox, {
                [styles.error]: !!error,
                [styles.focus]: !!focused || !!value || !!error,
                [styles.password]: props.type === 'password',
            })}>
            <input {...props} />
            <label>{label}</label>
            <i />
            {error ? <span className={styles.errorRow}>{error}</span> : null}
        </div>
    )
});

type Props = InputProps;