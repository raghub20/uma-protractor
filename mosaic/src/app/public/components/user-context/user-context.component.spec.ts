import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { UserContextComponent } from './user-context.component';
import { AppConfigService } from 'src/app/core/services/app-config.service';
import { ApiConfigService } from 'src/app/core/services/api-config.service';
import { RemoteLoggingService } from 'src/app/core/services/remote-logging.service';
import { MockedAppConfigService } from 'e2e/src/mocks/mocked-app-config.service';
import { UserContextService } from '../../../core/services/user-context.service';
import { Router } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { of } from 'rxjs';
import { UserContext } from '../../../core/models/user-context.model';

describe('UserContextComponent', () => {
  let component: UserContextComponent;
  let service: UserContextService;
  let fixture: ComponentFixture<UserContextComponent>;
  const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        { provide: AppConfigService, useClass: MockedAppConfigService },
        UserContextService,
        RemoteLoggingService,
        ApiConfigService,
        { provide: Router, useValue: router }
      ],
      declarations: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    // service = new UserContextService(null, null);
    // component = new UserContextComponent(service, null);
    fixture = TestBed.createComponent(UserContextComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(UserContextService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a user name', () => {
    expect(component).toBeTruthy();
    const el = fixture.debugElement.nativeElement.querySelector('a');
    expect(el.textContent).not.toBe('');
  });

  it('should have a user Image', () => {
    expect(component).toBeTruthy();
    const response: UserContext = {
        userContextName: 'Heidi',
        userContextDesignation: 'Head of Global Mobility',
        userContextImage: '../assets/icons/icon-72x72.png'
    };
    spyOn(service, 'getUserContextDetails').and.returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement.querySelector('img').getAttribute('src');
    expect(el).not.toBe('');
  });

  it('should not have the menu open', async () => {
    const menu = fixture.debugElement.nativeElement.querySelector('.mat-menu-panel');
    expect(menu).toBeFalsy();
  });

  it('should call service and get UserContextDetails on load, response variable not to be null', () => {
    const response: UserContext = {
      userContextName: 'Heidi',
      userContextDesignation: 'Head of Global Mobility',
      userContextImage: '../assets/icons/icon-72x72.png'
    };
    spyOn(service, 'getUserContextDetails').and.returnValue(of(response));
    component.ngOnInit();
    expect(component.userContextDetails).toBeTruthy();
  });

  it('should goto Logout when logout method is called', () => {
    component.logout();
    expect(router.navigate).toHaveBeenCalledWith(
      ['/externalRedirect', { externalUrl: 'http://localhost:4201/#/logout' }], {
      skipLocationChange: true
    });
  });
});


