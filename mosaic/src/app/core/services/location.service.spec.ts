import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';

describe('LocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationService = TestBed.get(LocationService);
    expect(service).toBeTruthy();
  });

  /*
  it('should return values more than 0', () => {
    const service: LocationService = TestBed.get(LocationService);
    expect(service.getLocations.length).toBeGreaterThan(0);
  });

  */
});
