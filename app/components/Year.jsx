import React from 'react';

class Year extends React.Component {
  render() {
    return (
      <div>Overview for {this.props.params.year} goes here</div>
    )
  }
}
