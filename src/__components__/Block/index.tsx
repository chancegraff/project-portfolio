import React from 'react';
import cx from 'classnames';

import styles from './index.module.scss';


const Block: React.FC<{
  color?: 'black' | 'white',
  className?: string,
}> = (props) => {
  const {
    className = '',
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
      <div
        className={cx(
          styles['block'],
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Block;
