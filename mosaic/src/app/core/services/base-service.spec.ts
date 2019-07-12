import { TestBed, inject } from '@angular/core/testing';

import { BaseService } from './base-service';
import { ApiConfigService } from './api-config.service';
import { HttpClientModule } from '@angular/common/http';

describe('BaseService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ],
        providers: [
            BaseService,
            { provide: ApiConfigService }
        ]
    });
  });

   it('should be created', inject([BaseService], (service: BaseService) => {
     expect(service).toBeTruthy();
   }));
});
