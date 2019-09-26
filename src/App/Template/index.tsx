import React from 'react';

import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const Template: React.FC<{}> = (props) => {
  const {
    children,
  } = props;

  return (
    <>
      <header>
        <h1>Chance Graff</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sandbox">Sandbox</Link>
        <Link to="/resume">Resume</Link>
      </nav>
      <section className={styles['section-container']}>
        {children}
      </section>
      <footer>
        <span>Chance Graff</span>
      </footer>
    </>
  );
};

export default Template;
