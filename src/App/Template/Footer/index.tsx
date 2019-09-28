import React from 'react';

import { ReactComponent as Logo } from '__svgs__/logo.svg';

import styles from './index.module.scss';


const Footer: React.FC<{}> = (props) => (
  <footer className={styles['footer-container']}>
    <span>Chance Graff</span>
    <Logo className={styles['logo']} />
  </footer>
);

export default Footer;
