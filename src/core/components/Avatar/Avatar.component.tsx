import type { FC } from 'react';
import type { AvatarProps } from './Avatar.types';

import * as styles from './Avatar.css';

const Avatar: FC<AvatarProps> = ({ title, description, src }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={src} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Avatar;
