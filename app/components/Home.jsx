import React from 'react';
import Router from 'react-router';

import getAllData from '../stores/everything';
import {kvMap} from '../utils';

var Link = Router.Link;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {years: null};

    getAllData()
    .then((data) => this.setState({years: data.years}));
  }

  render() {
    if (!this.state.years) {
      return <span className="loading">Loading data...</span>;
    }

    return (

      <div className="home">
        Overview of drone strike data goes here.
        <ul>{kvMap(this.state.years, (year, data, index) => (

            <li key={year}>
              There were {data.droneStrikes.length} covert drone strikes
              in <Link to="year" params={{year: year}}>{year}.</Link>
            </li>

        ))}</ul>
      </div>

    )
  }
}
