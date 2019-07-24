import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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

  /** Tracks if nav on desktop is minimized */
  public sidebarMinimized: boolean;
  /** nav api subscription */
  private navSub: Subscription;

  navLinks:any;

  /** Component instantiation */
  constructor(private router: Router, private appConfig: AppConfigService, private titleService: Title) { }

  /** Component Angular initialization lifecycle hook */
  ngOnInit() {
        this.titleService.setTitle('Mosaic');

        this.navLinks = [
          {
            label: 'Dashboard',
            path: 'dashboard'
          },
          {
              label: 'Cost Models',
              path: 'cost-models'
          },
          {
              label: 'Candidates',
              path: 'candidate-profiles'
          },
          {
              label: 'Approved Moves',
              path: 'approved-moves'
          },
          {
              label: 'Explore Destinations',
              path: 'explore-destinations'
          },
          {
              label: 'Services',
              path: 'services'
          }
      ];
  }

    /** Toggles compressed display of desktop template and navigation */
    sidebarToggle() {
      this.sidebarMinimized = !this.sidebarMinimized;
    }

  /** Component Angular destructor lifecycle hook */
  ngOnDestroy(): void {
    this.navSub.unsubscribe();
  }
}
