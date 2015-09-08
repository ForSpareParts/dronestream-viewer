import moment from 'moment';
import React from 'react';
import {Line as LineChart} from 'react-chartjs';
import Router from 'react-router';

import DroneStrikeTable from './DroneStrikeTable';
import getStore from '../stores';
import {buildChartData} from '../utils';

export default class Year extends React.Component {
  constructor(props) {
    super(props);
    this.state = {droneStrikes: null, months: null};

    getStore()
    .then((data) => {console.log(data.years[this.props.params.year]); console.log(this.props); return data;})
    .then((data) => this.setState({
      droneStrikes: data.years[this.props.params.year].droneStrikes,
      months: data.years[this.props.params.year].months
    }));
  }

  getChartData() {
    var labels = moment.monthsShort();
    var data = labels.map(
      (monthName) => this.state.months[monthName].droneStrikes.length);

    return buildChartData(labels, data);
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
      <div className="year-content">
        <span className="summary">
          There were {this.state.droneStrikes.length} covert drone strikes in {this.props.params.year}.
        </span>
        <LineChart data={this.getChartData()} width="800" height="600" />
        <DroneStrikeTable droneStrikes={this.state.droneStrikes} />
      </div>
    );
  }
}

Year.mixins = [Router.State];
