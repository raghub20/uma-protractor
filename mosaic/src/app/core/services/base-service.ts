/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';

/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
class ParameterCodec implements HttpParameterCodec {
  /** URL encode a key */
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  /** URL encode a value */
  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  /** URL decode a key */
  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  /** URL decode a value */
  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}
/** @ignore */
const PARAMETER_CODEC = new ParameterCodec();

/**
 * Gets config data for API services
 */
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  /**
   * base constructor 
   * @param config API Config Service injection
   * @param http HTTP Client injection
   */
  constructor(protected config: ApiConfigService, protected http: HttpClient) {
  }

  /**
   * The root URL for API operations
   */
  private _rootUrl: string;

  /**
   * Returns the root url for API operations. If not set directly in this
   * service, will fallback to ApiConfiguration.rootUrl.
   */
  get rootUrl(): string {
    return this._rootUrl || this.config.rootUrl;
  }

  /**
   * Sets the root URL for API operations in this service.
   */
  set rootUrl(rootUrl: string) {
    this._rootUrl = rootUrl;
  }

  /**
   * Creates a new `HttpParams` with the correct codec
   */
  protected newParams(): HttpParams {
    return new HttpParams({
      encoder: PARAMETER_CODEC
    });
  }
}
