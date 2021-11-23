import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import { ReactComponent as Logo } from '__media__/logo.svg';

import styles from './index.module.scss';


const Footer: React.FC<{}> = (props) => (
  <footer className={styles['footer-container']}>
    <div className={styles['nav-container']}>
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
    </div>
    <div className={styles['social-container']}>
      <SocialIcon className={styles['social-link']} url="https://github.com/chancegraff" />
      <SocialIcon className={styles['social-link']} url="https://www.linkedin.com/in/chancegraff/" />
      <SocialIcon className={styles['social-link']} url="https://medium.com/@chancegraff" />
      <SocialIcon className={styles['social-link']} url="https://dribbble.com/chancegraff" />
    </div>
    <Logo className={styles['logo']} />
  </footer>
);

export default Footer;
