import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import MainPage from './pages/MainPage';
import RootPage from './pages/RootPage';
import TestPage from './pages/TestPage';

export default (
  <Route path='/' handler={MainPage}>
    <Route name='root' path='/' handler={RootPage} />
    <Route name='test' path='/test' handler={TestPage} />
  </Route>
);
