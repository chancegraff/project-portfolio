import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Hero from '__components__/Hero';
import Block from '__components__/Block';
import ProjectsList from '__components__/ProjectsList';

import { ReactComponent as HeroSvg } from '__media__/splash.svg';
import me from '__media__/me.jpg';

import styles from './index.module.scss';


const Splash: React.FC<{}> = () => {
  const query = useQuery(gql(`
    query {
      projects {
        name
        shortDescription
      }
    }
  `));

  return (
    <div className={styles['splash-container']}>
      <Hero>
        <HeroSvg />
      </Hero>
      <Block className={styles['me-block']}>
        <div className={styles['me-text']}>
          <h1 className={styles['me-title']}>Hello World</h1>
          <p className={styles['me-paragraph']}>
            {`
              I'm an asexual American husband / programmer / designer / gamer / writer / cat dad, and
              a Senior Engineer at
            `}
            <a
              className={styles['ha-link']}
              href="https://humanagency.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              HumanAgency
            </a>
            {`
              in St Louis, Missouri.
              I'm a life-long programmer having started before I was a teenager, and I've spent
              the last five years as a professional developer in the local startup community.
            `}
          </p>
        </div>
        <img className={styles['me-image']} src={me} alt="My face" />
      </Block>
      <Block
        color="white"
        className={styles['projects-block']}
      >
        <h1 className={styles['projects-title']}>Recent Projects</h1>
        <p className={styles['projects-description']}>
          {`
            These are some recent projects that I've been working on. Click through to view them in action!
          `}
        </p>
        <ProjectsList projectsQuery={query} visibleProjects={3} />
      </Block>
    </div>
  );
};

export default Splash;
