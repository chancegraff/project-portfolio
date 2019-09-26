import React from 'react';

import styles from './index.module.scss';


const Header: React.FC<{}> = (props) => (
  <header className={styles['header-container']}>
    <h1>Chance Graff</h1>
  </header>
);

export default Header;
