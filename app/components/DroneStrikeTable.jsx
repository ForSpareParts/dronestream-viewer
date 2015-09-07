import moment from 'moment';
import React from 'react';

/**
 * Renders a set of drone strikes as a table -- expects its data as a 
 * droneStrikes prop.
 */
export default class DroneStrikeTable extends React.Component {
  render() {
    return (

      <table className="drone-strikes">
        <thead>
          <tr>
            <th>Date</th>
            <th>Country</th>
            <th>Deaths</th>
            <th>Civilians Injured/Killed</th>
          </tr>
        </thead>

        <tbody>
          {this.props.droneStrikes.map((strike) =>
            <DroneStrikeRow strike={strike} key={strike.number} />)}
        </tbody>
      </table>

    );
  }
}

class DroneStrikeRow extends React.Component {
  render() {
    var formattedDate = moment(this.props.strike.date).format(
      "dddd, MMMM Do YYYY, h:mm:ss a");

    return (

      <tr>
        <td>{formattedDate}</td>
        <td>{this.props.strike.country}</td>
        <td>{this.props.strike.deaths}</td>
        <td>{this.props.strike.civilians}</td>
      </tr>

    );
  }
}