import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { NavigationService } from './navigation.service';
import { RemoteLoggingService } from './remote-logging.service';
import { AppConfigService } from './app-config.service';
import { MockedAppConfigService } from '../../../../e2e/src/mocks/mocked-app-config.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NavItem as INavItem } from '../models/nav-item.model';
import { NavItem } from 'e2e/src/data/NavItem';
import { BaseClientService } from './base-client.service';
import { ApiConfigService } from './api-config.service';

describe('NavigationService', () => {
  const config: any = require('../../../environment-config.json'); // Manually load config
  const rootUrl: string = config.api.protocol + '://' + config.api.host + ':' + config.api.port + config.api.base_url; // Parse API root

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: AppConfigService, useClass: MockedAppConfigService },
        ApiConfigService,
        RemoteLoggingService,
        BaseClientService,
        NavigationService
      ]
    });
  });

  it('should be created', inject([NavigationService], (service: NavigationService) => {
    expect(service).toBeTruthy();
  }));

  it('should call correct API for getNavItems() and handle response', fakeAsync(
    inject([NavigationService, HttpTestingController], (service: NavigationService, controller: HttpTestingController) => {
      const mockedResponse: INavItem[] = NavItem.getData();
      service.getNavItems().subscribe(response => {
        expect(response).toEqual(mockedResponse);
      });
      const request = controller.expectOne(rootUrl + 'nav-items');
      expect(request.request.method).toBe('GET', 'Request method is not a GET');
      expect(request.request.responseType).toBe('json');
      request.flush(mockedResponse);
    })
  ));
});
