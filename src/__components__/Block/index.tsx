import React from 'react';
import cx from 'classnames';

import styles from './index.module.scss';


const Block: React.FC<{
  color?: 'black' | 'white',
}> = (props) => {
  const {
    children,
    color = 'black',
  } = props;

  return (
    <div
      className={cx(
        styles['block-container'],
        styles[color],
      )}
    >
      <div className={styles['block']}>
        {children}
      </div>
    </div>
  );
};

export default Block;
