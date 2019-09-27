import React from 'react';

import Hero from '__components__/Hero';

import { ReactComponent as ResumeSvg } from './hero.svg';

import styles from './index.module.scss';

const Resume: React.FC<{}> = () => {
  return (
    <div className={styles['resume-container']}>
      <Hero>
        <ResumeSvg />
      </Hero>
      <div className={styles['about-container']}>
        <span>About</span>
      </div>
    </div>
  );
};

export default Resume;
