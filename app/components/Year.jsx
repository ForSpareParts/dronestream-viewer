import React from 'react';
import Router from 'react-router';

export default class Year extends React.Component {
  render() {
    return (
      <div>Overview for {this.props.params.year} goes here</div>
    )
  }
}

Year.mixins = [Router.State];
