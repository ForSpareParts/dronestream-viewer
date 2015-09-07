import React from 'react';
import Router from 'react-router';

import getStore from '../stores';

var RouteHandler = Router.RouteHandler;

import NavBar from './NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    //we only need to know *which* years we have data for to populate the nav
    //bar (we don't really need the data itself)
    this.state = {years: []};

    getStore()
    .then((data) => this.setState({
      years: Object.keys(data.years),
    }));
  }

  render() {
    return (
      <div className="app-container">
        <NavBar years={this.state.years}/>
        <RouteHandler {...this.props} />
      </div>
    );
  }
}
