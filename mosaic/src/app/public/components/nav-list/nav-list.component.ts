import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from '../../../core/services/navigation.service';
import { NavItem } from '../../../core/models/nav-item.model';
import { Router, RoutesRecognized } from '@angular/router';

/** Navigation list component */
@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent implements OnInit {
  /** input for if the nav is minimizable **/
  @Input() minimizable: boolean;
  /** nav items */
  public navItems$: Observable<NavItem[]>;
  /** local for nav minimized */
  public minimized: boolean;
  /** selected nav item */
  public selectedId: number;

  /** Component instantiation */
  constructor(private navigationSvc: NavigationService, private router: Router) { }

  /** Component Angular initialization lifecycle hook */
  ngOnInit() {
    this.minimizable = false;
    this.navItems$ = this.navigationSvc.getNavItems();
  }

  /** Toggles navigation test visibility */
  public minimize(minimized: boolean) {
    if (this.minimizable) {
        this.minimized = minimized;
    }
  }

  /** Handles navigation item user clicks */
  public navClick(navItem: NavItem) {
    if (navItem.externalUrl) {
      window.open(navItem.externalUrl);
    } else {
      this.router.navigate([navItem.route]);
    }
  }

  /** Selects navigation item by id */
  public selectById(id: number) {
    this.selectedId = id;
  }
}
