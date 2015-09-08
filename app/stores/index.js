import superagent from 'superagent';
import saPromise from 'superagent-promise';

import rawData from './data';
import { ApplicationStore } from './store-types';

var request = saPromise(superagent, Promise);

//used to cache the store on repeated calls
var appStore = null;

export default function() {
  if (appStore !== null) {
    return Promise.resolve(appStore);
  }

  return Promise.resolve(rawData)
  .then((res) => {
    appStore = new ApplicationStore(res.body.strike)
    return appStore;
  });
}
