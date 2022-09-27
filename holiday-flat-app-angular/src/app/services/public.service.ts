import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/public/';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }

  getDisabilities(): Observable<any> {
    return this.http.get(API_URL + "disabilities");
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'places');
  }

  getPlacesByDisabilityId(id:number): Observable<any> {
    return this.http.get(API_URL + 'places/' + id)
  }
}
