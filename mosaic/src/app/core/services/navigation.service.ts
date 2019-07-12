import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseClientService } from './base-client.service';
import { RemoteLoggingService } from './remote-logging.service';
import { NavItem } from '../models/nav-item.model';

/** This service is used for returning website navigation */
@Injectable({
  providedIn: 'root'
})
export class NavigationService {
    /** standard constructor for services */
    constructor(private baseClient: BaseClientService, private logSvc: RemoteLoggingService) { }

    /** Returns an array of navigation items */
    getNavItems(): Observable<Array<NavItem>> {
        return this.baseClient.get<NavItem>('nav-items', 'getting nav items').pipe(
            map(r => r.body),
            catchError((err) => {
                this.logSvc.logError(err);
                const emptyArray: NavItem[] = [];
                return of(emptyArray);
            })
        );
    }
}
