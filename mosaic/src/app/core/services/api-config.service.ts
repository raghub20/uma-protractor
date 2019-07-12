/* tslint:disable */
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

/**
 * Gets the global API services configuration
 */
@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  /** Root URL for API operations */
  rootUrl: string;

  /**
   * Initialize the rootURL
   */
  constructor(private config: AppConfigService) {
    const apiConfig: {[key: string]: string | number }  = this.config.getConfig('api');
    this.rootUrl = apiConfig.protocol + '://' + apiConfig.host + ':' + apiConfig.port + apiConfig.base_url;
  }
}
