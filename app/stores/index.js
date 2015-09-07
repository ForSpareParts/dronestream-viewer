import superagent from 'superagent';
import saPromise from 'superagent-promise';

import rawData from './data';
import { ApplicationStore } from './store-types';

var request = saPromise(superagent, Promise);

export default function() {
  var data = {};

  return Promise.resolve(rawData)
  .then((res) => new ApplicationStore(res.body.strike));
}
