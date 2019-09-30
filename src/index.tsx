import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import App from './App';
import ScrollToTop from './ScrollToTop';

import * as serviceWorker from './serviceWorker';

const client = new ApolloClient();

ReactDOM.render((
  <BrowserRouter>
    <ScrollToTop>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ScrollToTop>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
