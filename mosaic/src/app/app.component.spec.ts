import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './core/services/app-config.service';
import { ApiConfigService } from './core/services/api-config.service';
import { RemoteLoggingService } from './core/services/remote-logging.service';
import { MockedAppConfigService } from '../../e2e/src/mocks/mocked-app-config.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule
      ],
      providers: [
        { provide: AppConfigService, useClass: MockedAppConfigService },
        RemoteLoggingService,
        ApiConfigService,
        Title
      ],
      declarations: [],
    })
    .compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should allow toggling minimized sidebar through code', () => {
    component.sidebarMinimized = false;
    component.sidebarToggle();
    expect(component.sidebarMinimized).toBeTruthy();
    component.sidebarToggle();
    expect(component.sidebarMinimized).toBeFalsy();
  });
});
