import React from 'react';

import allProjects from '__data__/projects';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import Template from './Template';
import Splash from './Splash';
import Sandbox from './Sandbox';
import Resume from './Resume';
import Project from './Project';


const App: React.FC<{}> = () => (
  <Template>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/sandbox" component={Sandbox} />
      <Route
        path="/sandbox/:projectSlug"
        render={(routeProps: RouteComponentProps<{
          projectSlug: string,
        }>): JSX.Element => {
          const {
            match: {
              params: {
                projectSlug,
              },
            },
          } = routeProps;

          const project = allProjects.find((currentProject) => currentProject.slug === projectSlug);

          let renderResult = (
            <Redirect to="/404" />
          );

          if(project) {
            renderResult = (
              <Project
                {...routeProps}
                project={project}
              />
            );
          }

          return renderResult;
        }}
      />
      <Route path="/404"><span>404</span></Route>
      <Redirect from="*" to="/404" />
    </Switch>
  </Template>
);

export default App;
