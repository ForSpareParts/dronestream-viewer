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

        <ul className="year-links">
          {this.props.years.map((year) => (
            <li><Link to="year" params={{year: year}}>{year}</Link></li>
          ))}
        </ul>
      </header>
    );
  }
}
