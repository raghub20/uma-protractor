import { TestBed } from '@angular/core/testing';

import { ApprovedMovesService } from './approved-moves.service';

describe('ApprovedMovesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprovedMovesService = TestBed.get(ApprovedMovesService);
    expect(service).toBeTruthy();
  });
});
