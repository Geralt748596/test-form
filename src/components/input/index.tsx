import { HTMLProps, memo } from 'react';
import styles from './styles.module.scss';

export const Input = memo(({ label, ...props }: Props) => {
    return (
        <div className={styles.input}>
            <label id={props.name}>{label}</label>
            <div className={styles.wrapper}>
                <input {...props} />
            </div>
        </div>
    )
});

type Props = HTMLProps<HTMLInputElement> & { label: string };