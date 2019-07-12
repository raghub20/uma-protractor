import { TestBed } from '@angular/core/testing';

import { CostModelsService } from './cost-models.service';

describe('CostModelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostModelsService = TestBed.get(CostModelsService);
    expect(service).toBeTruthy();
  });
});
