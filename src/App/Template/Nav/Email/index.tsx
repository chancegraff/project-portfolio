import React from 'react';
import { MdMailOutline } from 'react-icons/md';

import styles from './index.module.scss';


const Nav: React.FC<{
  mediaQueries: {
    mobile: boolean,
    tablet: boolean,
    desktop: boolean,
  },
}> = (props) => {
  const {
    mediaQueries: {
      desktop,
    },
  } = props;

  let children: React.ReactNode = 'me@chancegraff.com';

  if(desktop === false) {
    children = (
      <MdMailOutline />
    );
  }

  return (
    <a
      className={styles['email-container']}
      href="mailto:me@chancegraff.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Nav;
