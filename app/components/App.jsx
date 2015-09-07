import React from 'react';
import Router from 'react-router';

var RouteHandler = Router.RouteHandler;

import NavBar from './NavBar';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <NavBar />
        <RouteHandler {...this.props} />
      </div>
    );
  }
}
