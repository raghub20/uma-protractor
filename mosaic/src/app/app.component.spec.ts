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

  it('should allow toggling minimized sidebar by clicking toggle button', () => {
    component.sidebarMinimized = false;

    // get the sidebar by CSS
    const sidebar: DebugElement = fixture.debugElement.query(By.css('sidebar-desktop'));
    // So I can get the sidebar minned by css twice (once should come back with nothing)
    let sidebarMinned: DebugElement;
    // Can only do this if there is a sidebar...
    if (sidebar) {
      const comp: any = fixture.nativeElement;
      // Click button in DOM
      const toggleBtn: any = comp.querySelection('button');
      toggleBtn.click();
      expect(component.sidebarMinimized).toBeTruthy();
      // Validate sidebar closed in DOM via CSS
      sidebarMinned = fixture.debugElement.query(By.css('sidebar-desktop-min'));
      expect(sidebarMinned).toBeTruthy();
      // Click button in DOM
      toggleBtn.click();
      expect(component.sidebarMinimized).toBeFalsy();
      // Validate sidebar open in DOM via CSS
      sidebarMinned = fixture.debugElement.query(By.css('sidebar-desktop-min'));
      expect(sidebarMinned).toBeFalsy();
    }
  });

  it('should set the document title and select a navigation item', fakeAsync(() => {
    const titleService: Title = TestBed.get(Title);
    const spyTitleService: jasmine.Spy = spyOn(titleService, 'setTitle');
    const spySelectNavItemById: jasmine.Spy = spyOn(component, 'selectNavItemById').and.callThrough();
    router.initialNavigation(); // Can't mock RoutesRecognized event due to current Angular limitations, this gets around that for now
    tick(5000); // Takes a moment to process setTitle and selectNavItemById calls, 5 seconds should provide plenty of time to process
    expect(spyTitleService).toHaveBeenCalledWith('Mosaic - Home');
    expect(spySelectNavItemById).toHaveBeenCalledWith(1);
  }));

  it('should allow setting a navigation item on desktop and mobile navigation', () => {
    component.selectNavItemById(1);
    expect(component.desktopNavList.selectedId).toBe(1);
    expect(component.mobileNavList.selectedId).toBe(1);
  });

  it('should goto Logout when logout method is called', () => {
    const navigateSpy: jasmine.Spy = spyOn(router, 'navigate');
    component.logout();
    expect(navigateSpy).toHaveBeenCalledWith(
      ['/externalRedirect', { externalUrl: 'http://localhost:4201/#/logout' }], {
      skipLocationChange: true
    });
  });
});
