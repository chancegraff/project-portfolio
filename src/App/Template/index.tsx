import React from 'react';

import styles from './index.module.scss';

import Header from './Header';
import Nav from './Nav';
import Section from './Section';
import Footer from './Footer';


const Template: React.FC<{}> = (props) => {
  const {
    children,
  } = props;

  return (
    <>
      <div className={styles['header-nav-container']}>
        <Header />
        <Nav />
      </div>
      <Section>
        {children}
      </Section>
      <Footer />
    </>
  );
};

export default Template;
