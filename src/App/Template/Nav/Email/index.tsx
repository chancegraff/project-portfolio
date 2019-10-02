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
      mobile,
    },
  } = props;

  let children: React.ReactNode = 'me@chancegraff.dev';

  if(mobile === true) {
    children = (
      <MdMailOutline />
    );
  }

  return (
    <a
      className={styles['email-container']}
      href="mailto:me@chancegraff.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Nav;
