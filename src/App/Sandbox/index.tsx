import React from 'react';

import Hero from '__components__/Hero';

import styles from './index.module.scss';

const Sandbox: React.FC<{}> = () => {
  return (
    <div className={styles['sandbox-container']}>
      <Hero>
        Sandbox
      </Hero>
      <div className={styles['about-container']}>
        <span>About</span>
      </div>
    </div>
  );
};

export default Sandbox;
