import React from 'react';
import {Link} from 'react-router';

export default class TestPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Test Page</h1>
        <p>hai!</p>
        <p><Link to="root">back to root</Link></p>
      </div>
    );
  }
}
