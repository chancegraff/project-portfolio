import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '__svgs__/logo.svg';

import styles from './index.module.scss';


const Header: React.FC<{}> = (props) => (
  <header className={styles['header-container']}>
    <Link to="/">
      <Logo className={styles['logo']} />
    </Link>
  </header>
);

export default Header;
