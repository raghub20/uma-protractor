import { Injectable } from '@angular/core';
import { Location } from '../models/location';
;
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationList: Location[] = [
    { name: 'NJ, Nutley', 'id': 'desitnation1' },
    { name: 'GA, Atlanta', 'id': 'desitnation2' },
    { name: 'TX, Dallas', 'id': 'desitnation3' },
    { name: 'NJ, Jersey City', 'id': 'desitnation4' },
    { name: 'TX, Houston', 'id': 'desitnation2' },
    { name: 'NY, New York City', 'id': 'desitnation3' },
    { name: 'NY, Fushing', 'id': 'desitnation4' },
    { name: 'NJ, Edison', 'id': 'desitnation2' },
    { name: 'NJ, Newark', 'id': 'desitnation3' }
];

  constructor() { }

  /* Return the candidate json list and loop to display in the table */
  getLocations(): Location[] {
    return this.locationList;
  }

}
