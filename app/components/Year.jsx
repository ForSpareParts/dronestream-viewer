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
  }

  componentWillMount() {
    this.fetchStrikes(this.props.params.year);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchStrikes(nextProps.params.year);
  }

  /**
   * Retrieves drone strike data for a given year and asynchronously pushes
   * it into state.
   */
  fetchStrikes(year) {
    getStore()
    .then((data) => this.setState({
      droneStrikes: data.years[year].droneStrikes,
      months: data.years[year].months
    }));
  }

  getChartData() {
    var labels = moment.monthsShort();
    var data = labels.map(
      (monthName) => this.state.months[monthName].droneStrikes.length);

    return buildChartData(labels, data);
  }

  getChartOptions() {
    return {
      scaleOverride: true,
      scaleSteps: 6,
      scaleStepWidth: 5,
      scaleStartValue: 0,
    }
  }

  /**
   * Return content wrapped by the "outer" part of the page, which requires no
   * state data to render.
   *
   * This wraps either the real page, or the loading state.
   */
  wrap(content) {
    return (
      <div className="main-view year">
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
        <LineChart
          data={this.getChartData()}
          options={this.getChartOptions()}
          width="800" height="600" />
        <DroneStrikeTable droneStrikes={this.state.droneStrikes} />
      </div>
    );
  }
}

Year.mixins = [Router.State];
