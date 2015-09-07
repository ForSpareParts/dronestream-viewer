import React from 'react';
import Router from 'react-router';
/* global document */

import App from './components/App';
import Home from './components/Home';
import Year from './components/Year';

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="year" path="/years/:year" handler={Year}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.body);
});
