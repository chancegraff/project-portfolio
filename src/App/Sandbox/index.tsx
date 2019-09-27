import React from 'react';

import Hero from '__components__/Hero';

import { ReactComponent as SandboxSvg } from './hero.svg';

import styles from './index.module.scss';

const Sandbox: React.FC<{}> = () => {
  return (
    <div className={styles['sandbox-container']}>
      <Hero>
        <SandboxSvg className={styles['hero-svg']} />
      </Hero>
      <div className={styles['about-container']}>
        <span>About</span>
      </div>
    </div>
  );
};

export default Sandbox;
