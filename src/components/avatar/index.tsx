import { memo } from 'react';

import catA from './images/cat-a.png';
import cat from './images/cat.png';

import styles from './styles.module.scss';

export const Avatar = memo(({ isTurned }: Props) => {
    return (
        <div className={styles.avatar}>
            <div className={`${styles.avatarInner} ${isTurned ? styles.turn : ''}`}>
                <div className={styles.avatarFront}>
                    <img src={catA} alt="Avatar" />
                </div>
                <div className={styles.avatarBack}>
                    <img src={cat} alt="Avatar" />
                </div>
            </div>
        </div>
    )
});

type Props = {
    isTurned: boolean;
}