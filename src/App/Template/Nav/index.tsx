import React from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';

import styles from './index.module.scss';

import Email from './Email';


const Nav: React.FC<{}> = (props) => (
  <Media
    queries={{
      mobile: '(max-width: 800px)',
      tablet: '(min-width: 1154px) and (max-width: 1563px)',
      desktop: '(min-width: 1564px)',
    }}
  >
    {(mediaQueries): React.ReactNode => (
      <nav className={styles['nav-container']}>
        <Link to="/sandbox">Sandbox</Link>
        <Link to="/resume">Resume</Link>
        <Email
          mediaQueries={mediaQueries}
        />
      </nav>
    )}
  </Media>
);

export default Nav;
