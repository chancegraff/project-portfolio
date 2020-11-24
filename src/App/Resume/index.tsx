import React from 'react';

import Hero from '__components__/Hero';
import Block from '__components__/Block';

import { ReactComponent as ResumeSvg } from '__media__/resume.svg';

import styles from './index.module.scss';

const Resume: React.FC<{}> = () => {
  return (
    <div className={styles['resume-container']}>
      <Hero>
        <ResumeSvg />
      </Hero>
      <Block>
        <h1 className={styles['resume-title']}>Senior Engineer</h1>
        <p className={styles['resume-paragraph']}>
          Hands-on technology professional with a passion for improving and simplifying
          the user experience and interfaces. Self-taught programmer with knowledge in multiple
          languages, architectures, algorithms, and methodologies. Highlights of expertise include:
        </p>
        <div className={styles['resume-expertise']}>
          <ul className={styles['resume-list']}>
            <li>Application Architecture</li>
            <li>Relationship Building</li>
            <li>Customer Service</li>
          </ul>
          <ul className={styles['resume-list']}>
            <li>Project Management</li>
            <li>Vendor Relationships</li>
            <li>Team Leadership</li>
          </ul>
          <ul className={styles['resume-list']}>
            <li>Research & Analysis</li>
            <li>Talent Development</li>
            <li>Staff Coaching & Training</li>
          </ul>
        </div>
        <p className={styles['resume-paragraph']}>
          <strong>Technical Skills:</strong> ReactJS, JavaScript, TypeScript,
          HTML and HTML5, CSS and CSS3, SQL, Python, Django, AngularJS, Node,
          C#, VB, .NET, TSQL, Adobe Photoshop, Microsoft Excel, OpenOffice,
          PHP, and Ruby (RoR)
        </p>
      </Block>
      <Block color="white">
        <h2 className={styles['resume-title']}>Professional Experience</h2>
        <span className={styles['resume-position']}>
          <strong>Remote Senior Developer</strong>, Conduit/Ventures (2019 to Present)
        </span>
        <ul className={styles['resume-list']}>
          <li>
            Skipped onboarding in favor of a first-week assignment which was turned
            around into an MVP within days and highlighted celebrity streamers on the platform.
          </li>
          <li>
            Recommended and implemented client-side CPU/GPU monitoring before using it to improve
            memory utilization by 100% while attaining a 40x reduction in CPU usage and a 10x
            increase in long-term sessions.
          </li>
          <li>
            Self-taught Golang while architecting and developing an enterprise-grade microservice
            infrastructure which pulled articles from several sites to be voted on by millions of users.
          </li>
          <li>
            Replaced years-old tech debt and wrote feature flagging configuration with fully-typed
            interfaces using SOLID principles which allowed for future extension.
          </li>
          <li>
            Completely rewrote client-side mobile web application while implementing an autoplay
            gate for video streams that increased user engagement by 35% across all browsers.
          </li>
        </ul>
        <span className={styles['resume-position']}>
          <strong>Remote Senior Engineer</strong>, Human Agency (2018 to 2019)
        </span>
        <ul className={styles['resume-list']}>
          <li>
            Involved in every stage of development across entire application as part of
            leadership for 2 internationally dispersed teams of 6, from initial analysis
            and user interviews to research and development.
          </li>
          <li>
            Spearheaded design processes and provided feedback throughout, and offered
            insight and first-hand knowledge in development and developer operations.
          </li>
          <li>
            Developed processes for integrating dozens of vendors into application while
            harnessing data through local, custom algorithms to improve customer conversions.
          </li>
          <li>
            Pioneered front-end processes and conversion from JQuery to ReactJS from an
            initially outsourced code-base while optimizing page load times by over 4000%
            and decreasing resource sizes by a factor of 50.
          </li>
          <li>
            Designed and developed complete front-end rewrite from ground up single handedly
            while working with separate back-end team members.
          </li>
        </ul>
        <span className={styles['resume-position']}>
          <strong>Remote Lead Development Engineer</strong>, FocalCast (2016 to 2018)
        </span>
        <ul className={styles['resume-list']}>
          <li>
            Administered setup and management of cloud-based infrastructure for dozens
            of endpoints and continuous integration platform for four separate environments.
          </li>
          <li>
            Communicated objectives, goals, and future tasks of company through regular
            meetings with board members and executives.
          </li>
          <li>
            Crafted customer facing website, custom Github management tools, and CRON tasks
            for automated bug tracking management.
          </li>
          <li>
            Deployed projects through AWS utilizing EC2 instances or ECS clusters from
            Docker containers.
          </li>
          <li>
            Increased usability, lowered client complaints, distinguished high-usage aspects
            of product, made features easily accessible, and streamlined main-usage process.
          </li>
          <li>
            Improved overall application performance as a result of management, design,
            and development of end-to-end product redesign.
          </li>
          <li>
            Improved performance by 90% in terms of conversion speed and quality, and increased
            number of clients upon creation of Python application to convert documents to images.
          </li>
        </ul>
        <span className={styles['resume-position']}>
          <strong>CO-OP Developer/Developer 1</strong>, Caleres/Brown Shoe Co. (2014 to 2016)
        </span>
        <ul className={styles['resume-list']}>
          <li>
            Served as Lead Developer for data feeds utilizing SQL Server Integration Services (SSIS)
            and creating new feeds while maintaining old ones and working closely with Business and
            Vendor contacts to build requirements.
          </li>
          <li>
            Performed as eCommerce development team member on C#/VB/ASP.NET stack while coordinating
            with other teams on joint projects and maintaining 14 separate and unique sites.
          </li>
          <li>
            Resolved business problems by offering technical advice and data analysis. Investigated
            and resolved system issues and bugs.
          </li>
        </ul>
      </Block>
      <Block color="black">
        <h2 className={styles['resume-title']}>Education</h2>
        <span className={styles['resume-education']}>
          <strong>Bachelor of Science in Computer Science</strong>, Webster University, 2015
        </span>
        <span className={styles['resume-education']}>Southwestern Illinois College, 2012</span>
        <span className={styles['resume-education']}>
          <strong>High School Diploma</strong>, Waterloo High School, 2009
        </span>
        <span className={styles['resume-education']}>Chaminade College Prepatory School, 2008</span>
      </Block>
    </div>
  );
};

export default Resume;
