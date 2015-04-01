import React from 'react';
import {Link} from 'react-router';

export default class RootPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Root Page</h1>
        <p>
          <Link to="test">test page</Link>
        </p>
      </div>
    );
  }
}
