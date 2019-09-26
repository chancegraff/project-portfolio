import React from 'react';

import styles from './index.module.scss';


const Section: React.FC<{}> = (props) => {
  const {
    children,
  } = props;

  return (
    <section className={styles['section-container']}>
      {children}
    </section>
  );
};

export default Section;
