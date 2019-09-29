import React from 'react';

import Hero from '__components__/Hero';
import Block from '__components__/Block';

import { ReactComponent as UnfoundSvg } from '__svgs__/unfound.svg';

import styles from './index.module.scss';


const NotFound: React.FC = () => {
  return (
    <div className={styles['not-found-container']}>
      <Hero className={styles['not-found-hero']}>
        <UnfoundSvg />
      </Hero>
      <Block>
        <h1 className={styles['not-found-title']}>Page Not Found</h1>
        <p className={styles['not-found-paragraph']}>
          {'I\'m not sure how you found your way here, but you messed up.'}
        </p>
      </Block>
    </div>
  );
};

export default NotFound;
