import React from 'react';
import Router from 'react-router';

var Link = Router.Link;

export default class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="app">
          Drone Strike Data Viewer
        </Link>
        {this.props.years.map((year) => (
          <Link to="year" key={year} params={{year: year}}>{year}</Link>
        ))}
      </nav>
    );
  }
}
