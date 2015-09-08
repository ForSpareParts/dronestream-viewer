import React from 'react';
import {Line as LineChart} from 'react-chartjs';
import Router from 'react-router';

import DroneStrikeTable from './DroneStrikeTable'
import getStore from '../stores';
import {buildChartData} from '../utils';

var Link = Router.Link;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {years: null, droneStrikes: null};

    getStore()
    .then((data) => this.setState({
      years: data.years,
      droneStrikes: data.droneStrikes
    }));
  }

  getChartData() {
    var labels = Object.keys(this.state.years);
    labels.sort();

    var data = labels.map(
      (year) => this.state.years[year].droneStrikes.length);

    return buildChartData(labels, data);
  }

  render() {
    if (!this.state.years || !this.state.droneStrikes) {
      return <div className="main-view loading">Loading data...</div>;
    }

    return (

      <div className="main-view home">
        <LineChart data={this.getChartData()} width="800" height="600" />
        <DroneStrikeTable droneStrikes={this.state.droneStrikes} />
      </div>

    )
  }
}
