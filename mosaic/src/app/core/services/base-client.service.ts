import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from './base-service';
import { ApiConfigService } from './api-config.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService } from './http-error-handler.service';

/**
 * Used to make generic standard API calls.  The base URL for the service calls is based on the configuration.
 */
@Injectable({
  providedIn: 'root'
})
export class BaseClientService extends BaseService  {

  /**
   * base constructor
   * @param config API Config service injector
   * @param http HTTP Client injector
   * @param errorHandler HTTP error handler injector
   */
  constructor(config: ApiConfigService, http: HttpClient, private errorHandler: HttpErrorHandlerService) {
    super(config, http);
  }

  /** Run a GET API call, expecting a response with a single model
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param action The action that is performing the request
   * @return A response containing the expected model (single)
   */
  getById<TResponseModel>(route: string, action: string = 'error executing requests'): Observable<HttpResponse<TResponseModel>> {
    return this.http.get<TResponseModel>(this.rootUrl + route, { params: this.newParams(), observe: 'response', responseType: 'json' })
    .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

  /** Run a GET API call, expectiing a response with an array of the expected model
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param action The action that is performing the request
   * @return A response containing the expected models (array)
   */
  get<TResponseModel>(route: string, action: string = 'error executing requests'): Observable<HttpResponse<Array<TResponseModel>>> {
    return this.http.get<TResponseModel>(this.rootUrl + route, { params: this.newParams(), observe: 'response', responseType: 'json' })
    .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

  /** Run a PUT API call
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param body The object that is being updated
   * @param action The action that is performing the request
   * @return A response containing the expected result (single)
   */
  put<TResponseModel>(route: string, body: any, action: string = 'error putting request'): Observable<HttpResponse<TResponseModel>> {
    const url = this.rootUrl + route;
    return this.http.put<TResponseModel>(url, body, { params: this.newParams(), observe: 'response', responseType: 'json' })
        .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

  /** Run a POST API call
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param body The object that is being posted
   * @param action The action that is performing the request
   * @return A response containing the expected result (single)
   */
  post<TResponseModel>(route: string, body: any, action: string = 'error posting request'): Observable<HttpResponse<TResponseModel>> {
    const url = this.rootUrl + route;
    return this.http.post<TResponseModel>(url, body, { params: this.newParams(), observe: 'response', responseType: 'json' })
      .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

  /** Run a DELETE API call
   * @param route The endpoint for the delete request
   * @param action The action that is performing the request
   * @return A response containing the expected result
   */
  delete<TResponseModel>(route: string, action: string = 'error delete request'): Observable<HttpResponse<TResponseModel>> {
    const url = this.rootUrl + route;
    return this.http.delete<TResponseModel>(url, { params: this.newParams(), observe: 'response', responseType: 'json' })
      .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }
}
