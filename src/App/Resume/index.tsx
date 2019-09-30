import React from 'react';

import Hero from '__components__/Hero';
import Block from '__components__/Block';

import { ReactComponent as ResumeSvg } from '__media__/resume.svg';

import styles from './index.module.scss';

const Resume: React.FC<{}> = () => {
  return (
    <div className={styles['resume-container']}>
      <Hero>
        <ResumeSvg />
      </Hero>
      <Block>
        <span>About</span>
      </Block>
    </div>
  );
};

export default Resume;
