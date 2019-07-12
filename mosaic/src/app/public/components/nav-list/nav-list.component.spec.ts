import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NavListComponent } from './nav-list.component';
import { AppConfigService } from '../../../core/services/app-config.service';
import { ApiConfigService } from '../../../core/services/api-config.service';
import { RemoteLoggingService } from '../../../core/services/remote-logging.service';
import { MockedAppConfigService } from '../../../../../e2e/src/mocks/mocked-app-config.service';
import { MatIconModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NavigationService } from '../../../core/services/navigation.service';
import { NavItem as INavItem } from '../../../core/models/nav-item.model';
import { NavItem } from 'e2e/src/data/NavItem';
import { DebugElement } from '@angular/core';

describe('NavListComponent', () => {
  let component: NavListComponent;
  let fixture: ComponentFixture<NavListComponent>;
  let router: Router;
  const navItems: INavItem[] = NavItem.getData();
  const navigationServiceMock = { getNavItems(): Observable<Array<NavItem>> {
    return of(navItems);
  }};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatIconModule
      ],
      providers: [
        { provide: AppConfigService, useClass: MockedAppConfigService },
        RemoteLoggingService,
        ApiConfigService,
        { provide: NavigationService, useValue: navigationServiceMock }
      ],
      declarations: [NavListComponent],
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should allow a list of navigation items to be displayed', () => {
    const debugElement: DebugElement[] = fixture.debugElement.queryAll(By.css('.nav-item'));
    expect(debugElement.length).toBe(2);
    const navItemDiv: HTMLDivElement = debugElement[0].nativeElement;
    const button: HTMLButtonElement = <HTMLButtonElement>navItemDiv.childNodes[0];
    const icon: HTMLElement = <HTMLElement>button.childNodes[1];
    const label: HTMLSpanElement = <HTMLSpanElement>button.childNodes[2];
    expect(icon.innerHTML).toBe('home'); // Material icon InnerHtml is the icon name
    expect(label.innerHTML).toBe('Home');
  });

  it('should toggle the navigation between normal and compressed views only when allowed', () => {
    component.minimizable = true;
    component.minimize(true);
    expect(component.minimized).toBe(true);
    component.minimize(false);
    expect(component.minimized).toBe(false);
    component.minimizable = false;
    component.minimize(true);
    expect(component.minimized).toBe(false);
  });

  it('should allow a navigation item to be selected', () => {
    component.selectById(1);
    fixture.detectChanges();
    expect(component.selectedId).toBe(1);
    const debugElement: DebugElement[] = fixture.debugElement.queryAll(By.css('.nav-item'));
    const navItemDiv: HTMLDivElement = debugElement[0].nativeElement;
    const button: HTMLButtonElement = <HTMLButtonElement>navItemDiv.childNodes[0];
    expect(button.classList.contains('selected')).toBeTruthy();
  });

  it('should navigate the user when a navigation item is clicked', () => {
    const navigateSpy: jasmine.Spy = spyOn(router, 'navigate');
    component.navClick(navItems[1]); // Second nav item (first is already selected)
    expect(navigateSpy).toHaveBeenCalledWith(['inbox']);
    const debugElement: DebugElement[] = fixture.debugElement.queryAll(By.css('.nav-item'));
    const navItemDiv: HTMLDivElement = debugElement[1].nativeElement; // Second nav item (first is already selected)
    const button: HTMLButtonElement = <HTMLButtonElement>navItemDiv.childNodes[0];
    button.click();
    expect(navigateSpy).toHaveBeenCalledWith(['inbox']);
  });
});
