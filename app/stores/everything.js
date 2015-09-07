import moment from 'moment';
import superagent from 'superagent';
import saPromise from 'superagent-promise';

import data from './data';

var request = saPromise(superagent, Promise);

export default function() {
  return Promise.resolve(data)
  .then((res) => {
    //sort strike data by year:
    var yearMap = new Map();
    res.body.strike.forEach((strike) => {
      var date = moment(strike.date);

      if (!yearMap.has(date.year())) {
        yearMap.set(date.year(), []);
      }

      yearMap.get(date.year()).push(strike);
    });

    return {
      allStrikes: res.body.strike,
      byYear: yearMap
    }
  });
}
