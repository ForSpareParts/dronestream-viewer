import React from 'react';
import Router from 'react-router';
/* global document */

import NavBar from './components/NavBar';
import Home from './components/Home';
import Year from './components/Year';

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

class App extends React.Component {
  render() {
    return (
      <div class="app-container">
        <NavBar />
        <RouteHandler {...this.props}/>
      </div>
    );
  }
}

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="year" path="/years/:year" handler={Year}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.body);
});
