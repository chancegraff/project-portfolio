import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import allProjects from '__data__/projects';

import Details from './Details';


const Project: React.FC<RouteComponentProps<{
  projectSlug: string,
}>> = (props) => {
  const {
    match: {
      params: {
        projectSlug,
      },
    },
  } = props;

  const project = allProjects.find((currentProject) => currentProject.slug === projectSlug);

  let renderResult = (
    <Redirect to="/404" />
  );

  if(project) {
    renderResult = (
      <Details project={project} />
    );
  }

  return renderResult;
};

export default Project;
