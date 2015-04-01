import React from 'react';
import {Link, RouteHandler} from 'react-router';

export default class MainPage extends React.Component {
  render() {
    return (
      <div style={{padding: '2em'}}>
        <RouteHandler/>
      </div>
    );
  }
}
