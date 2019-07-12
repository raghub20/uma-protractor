import { TestBed } from '@angular/core/testing';

import { BaseClientService } from './base-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiConfigService } from './api-config.service';
import { HttpErrorHandlerService } from './http-error-handler.service';

describe('BaseClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule
    ],
    providers: [
        HttpErrorHandlerService,
        { provide: ApiConfigService }
      ]}));

  it('should be created', () => {
    const service: BaseClientService = TestBed.get(BaseClientService);
    expect(service).toBeTruthy();
  });
});
