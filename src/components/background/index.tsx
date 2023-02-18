import { memo } from 'react';

import { cn } from '../../utils';

import styles from './styles.module.scss';

export const Background = memo(({ isActive }: Props) => {
    return (
        <div className={cn(styles.background, { [styles.active]: isActive })}>
            <div className={styles.first} />
            <div className={styles.second} />
        </div>
    )
});

type Props = {
    isActive: boolean;
}
