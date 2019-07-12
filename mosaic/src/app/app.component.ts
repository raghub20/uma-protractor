import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NavListComponent } from './public/components/nav-list/nav-list.component';
import { Router, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { AppConfigService } from './core/services/app-config.service';

/** Base application component - builds the site structure */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  /** Navigation component - desktop view */
  @ViewChild('desktopNavList') public desktopNavList: NavListComponent;
  /** Navigation component - mobile view */
  @ViewChild('mobileNavList') public mobileNavList: NavListComponent;
  /** Tracks if nav on desktop is minimized */
  public sidebarMinimized: boolean;
  /** nav api subscription */
  private navSub: Subscription;

  /** Component instantiation */
  constructor(private router: Router, private appConfig: AppConfigService, private titleService: Title) { }

  /** Component Angular initialization lifecycle hook */
  ngOnInit() {
    this.navSub = this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) { // We're outside router-outlet, hence must use this event to see route data
        const data = event.state.root.firstChild.data;
        this.selectNavItemById(data.navId);
        this.titleService.setTitle('Mosaic - ' + data.title);
      }
    });
  }

  /** Component Angular destructor lifecycle hook */
  ngOnDestroy(): void {
    this.navSub.unsubscribe();
  }

  /** Selects desktop and mobile navigation item based on id */
  selectNavItemById(id: number) {
    this.desktopNavList.selectById(id);
    this.mobileNavList.selectById(id);
  }

  /** Toggles compressed display of desktop template and navigation */
  sidebarToggle() {
    this.sidebarMinimized = !this.sidebarMinimized;
    this.desktopNavList.minimize(this.sidebarMinimized);
  }

  /** logout of the application.  Logout URL handled by configuration */
  logout() {
    const logoutURL = this.appConfig.getConfig('logout');
    this.router.navigate(['/externalRedirect', { externalUrl: logoutURL }], {
      skipLocationChange: true,
    });
  }
}
