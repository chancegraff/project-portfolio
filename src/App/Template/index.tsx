import React from 'react';

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
      <Header />
      <Nav />
      <Section>
        {children}
      </Section>
      <Footer />
    </>
  );
};

export default Template;
