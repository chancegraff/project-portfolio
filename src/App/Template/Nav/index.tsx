import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';


const Nav: React.FC<{}> = (props) => (
  <nav className={styles['nav-container']}>
    <Link to="/sandbox">Sandbox</Link>
    <Link to="/resume">Resume</Link>
  </nav>
);

export default Nav;
