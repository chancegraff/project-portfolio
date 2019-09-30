import React from 'react';
import cx from 'classnames';

import styles from './index.module.scss';


const Hero: React.FC<{
  className?: string,
  children: React.ReactElement<React.SVGProps<SVGSVGElement>>,
}> = (props) => {
  const {
    className,
    children,
  } = props;

  return (
    <div
      className={cx(
        styles['hero-container'],
        className,
      )}
    >
      <h1 className={styles['title-container']}>
        {children}
      </h1>
    </div>
  );
};

export default Hero;
