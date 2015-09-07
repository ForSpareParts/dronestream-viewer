import React from 'react';
import Router from 'react-router';

import getStore from '../stores';

export default class Year extends React.Component {
  constructor(props) {
    super(props);
    this.state = {droneStrikes: null};

    getStore()
    .then((data) => this.setState({
      droneStrikes: data.years[this.props.params.year].droneStrikes
    }));
  }

  /**
   * Return content wrapped by the "outer" part of the page, which requires no
   * state data to render.
   *
   * This wraps either the real page, or the loading state.
   */
  wrap(content) {
    return (
      <div className="year">
        <h2>{this.props.params.year}</h2>
        {content}
      </div>);
  }

  render() {
    if (!this.state.droneStrikes) {
      return this.wrap(
        <span className="loading">
          Loading data...
        </span>)
    }

    return this.wrap(
      <span className="summary">
        There were {this.state.droneStrikes.length} covert drone strikes in {this.props.params.year}.
      </span>);
  }
}

Year.mixins = [Router.State];
