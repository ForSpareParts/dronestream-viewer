import moment from 'moment';

export class DroneStrikeStore {
  constructor(droneStrikes) {
    this.createStorage();

    if (droneStrikes) {
      droneStrikes.forEach((strike) => this.push(strike));
    }
  }

  /**
   * Create any properties needed for push() to work
   */
  createStorage() {
    this.droneStrikes = [];    
  }

  /**
   * Insert a single drone strike into the data store.
   */
  push(strike) {
    this.droneStrikes.push(strike);
  }
}

export class ApplicationStore extends DroneStrikeStore {
  createStorage() {
    super.createStorage();
    this.years = {};
  }

  push(strike) {
    super.push(strike);

    var date = moment(strike.date);

    if (!this.years[date.year()]) {
      this.years[date.year()] = new DroneStrikeStore();
    }

    this.years[date.year()].droneStrikes.push(strike);
  }
}
