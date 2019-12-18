import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl = 'http://127.0.0.1:8080/travel';
  constructor(private http: HttpClient) {}

  getLocations(): Observable<any> {
    return this.http.get(this.baseUrl + '/locations', { withCredentials: true });
  }

  getLocationsByCodeAndType(code: string, type: string): Observable<any> {
    return this.http.get(this.baseUrl + '/locations/' + type + '/' + code, { withCredentials: true });
  }
  getAirportsByCoutryCode(countryCode: string): Observable<any> {
    return this.http.get(this.baseUrl + '/locations/airports/' + countryCode, { withCredentials: true });
  }
}
