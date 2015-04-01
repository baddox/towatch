require('./pure.css');

import React from 'react';
import { create as createRouter, HistoryLocation, HashLocation } from 'react-router';
import routes from './routes';

const router = createRouter({
  location: HashLocation,
  routes: routes,
});

router.run((Handler, state) => {
  React.render(<Handler {...state} />, document.getElementById('app'));
});
