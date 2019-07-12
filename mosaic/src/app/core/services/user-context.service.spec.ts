import { TestBed, inject } from '@angular/core/testing';
import { UserContextService } from './user-context.service';
import { AppConfigService } from 'src/app/core/services/app-config.service';
import { RemoteLoggingService } from 'src/app/core/services/remote-logging.service';
import { BaseClientService } from 'src/app/core/services/base-client.service';
import { HttpClientModule } from '@angular/common/http';
import { MockedAppConfigService } from 'e2e/src/mocks/mocked-app-config.service';
import { HttpErrorHandlerService } from 'src/app/core/services/http-error-handler.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserContextService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          HttpClientTestingModule
        ],
        providers: [
            UserContextService,
            { provide: AppConfigService, useClass: MockedAppConfigService },
            RemoteLoggingService,
            BaseClientService,
            HttpErrorHandlerService
        ]
    });
  });

   it('should be created', inject([UserContextService], (service: UserContextService) => {
     expect(service).toBeTruthy();
   }));

   it('should create getUserContextDetails method', inject([UserContextService], (service: UserContextService) => {
    expect(service.getUserContextDetails).toBeTruthy();
  }));
});
