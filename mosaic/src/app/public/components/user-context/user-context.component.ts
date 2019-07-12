import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserContextService } from '../../../core/services/user-context.service';
import { UserContext } from '../../../core/models/user-context.model';
import { AppConfigService } from '../../../core/services/app-config.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

/**user context component to display user context details */
@Component({
  selector: 'app-user-context',
  templateUrl: './user-context.component.html',
  styleUrls: ['./user-context.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserContextComponent implements OnInit, OnDestroy {
  /** response variable for unit testing */
  userContextDetails: UserContext;

  /** subscriber for Observable */
  sub: Subscription;
  /** user context constructor method
   * @param userContextService UserContextService injection
   */
  constructor(
    private userContextService: UserContextService,
    private appConfig: AppConfigService,
    private router: Router
  ) { }

  /** Base init method */
  ngOnInit() {
    /** Initialized the get method call */
    this.getUserContextDetails();
  }

  /** getusercontextdetails method to get the user details from service and to display it on the user context
   * section of the header
  */
  getUserContextDetails() {
    this.sub = this.userContextService.getUserContextDetails().subscribe( (output) => {
      this.userContextDetails = output;
    });
  }

  /** logout of the application.  Logout URL handled by configuration */
  logout() {
    const logoutURL = this.appConfig.getConfig('logout');
    this.router.navigate(['/externalRedirect', { externalUrl: logoutURL }], {
      skipLocationChange: true,
    });
  }

  ngOnDestroy(): void {
    if (!!this.sub) {
      this.sub.unsubscribe();
    }
  }
}
