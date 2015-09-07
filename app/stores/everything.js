import moment from 'moment';
import superagent from 'superagent';
import saPromise from 'superagent-promise';

import rawData from './data';

var request = saPromise(superagent, Promise);

export default function() {
  var data = {};

  return Promise.resolve(rawData)
  .then((res) => {

    data.droneStrikes = res.body.strike;
    data.years = {};

    data.droneStrikes.forEach((strike) => {
      var date = moment(strike.date);

      if (!data.years[date.year()]) {
        data.years[date.year()] = {
          droneStrikes: []
        };
      }

      data.years[date.year()].droneStrikes.push(strike);
    });

    return data;
  });
}
