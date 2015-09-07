import React from 'react';
import Router from 'react-router';

var Link = Router.Link;

export default class NavBar extends React.Component {
  render() {
    return (
      <header>
        <Link to="app">
          <h1>Drone Strike Data Viewer</h1>
        </Link>
      </header>
    );
  }
}
