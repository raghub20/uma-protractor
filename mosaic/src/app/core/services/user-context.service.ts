import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseClientService } from '../../core/services/base-client.service';
import { RemoteLoggingService } from '../../core/services/remote-logging.service';
import { UserContext } from '../models/user-context.model';

/** user context service to fetch user context details to be displayed on user context section of the
 * header
*/
@Injectable({
  providedIn: 'root'
})
export class UserContextService {

  /**
   * base constructor
   * @param http HTTP Client injection
   */
  constructor(
    protected baseClient: BaseClientService,
    private logSvc: RemoteLoggingService
  ) { }

  /**
   * get service method to get the user context details from the server
   */
  getUserContextDetails(): Observable<UserContext> {
    const response: UserContext = {
      userContextName: 'Heidi',
      userContextDesignation: 'Head of Global Mobility',
      userContextImage: '../assets/icons/icon-72x72.png'
    };
    return of(response);
    // return this.baseClient.get<UserContext>('userContext', 'getting User Context').pipe(
    //   map(r => r.body),
    //   catchError((err, source) => {
    //       const empty: any = null;
    //       this.logSvc.logError(err);
    //       return of(empty);
    //   })
    // );
  }
}
