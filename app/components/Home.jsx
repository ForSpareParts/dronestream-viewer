import React from 'react';
import Router from 'react-router';

import getAllData from '../stores/everything';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {strikesByYear: null};

    getAllData()
    .then((data) => this.setState({strikesByYear: data.byYear}));
  }

  getYearSummaries (yearData) {
    var summaries = [];

    yearData.forEach((dataArray, year) => summaries.push(
      <li>There were {dataArray.length} drone strikes in {year}.</li>
    ));

    return <ul>{summaries}</ul>;
  }

  render() {
    if (!this.state.strikesByYear) {
      return <span class="loading">Loading data...</span>;
    }

    return (
      <div class="home">
        Overview of drone strike data goes here.
        {this.getYearSummaries(this.state.strikesByYear)}
      </div>
    )
  }
}

Home.mixins = [Router.State];
