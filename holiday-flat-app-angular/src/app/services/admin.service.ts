import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getFamilies(): Observable<any> {
    return this.http.get(API_URL + "families");
  }

  getInterests(): Observable<any> {
    return this.http.get(API_URL + "interests");
  }

  deleteInterest(id: Number): Observable<any> {
    return this.http.delete(API_URL + "interests/" + id)
  }

  createInterest({name: interestName}): Observable<any> {
    return this.http.post(API_URL + "add-interest", {name: interestName});
  }

  getDisabilities(): Observable<any> {
    return this.http.get(API_URL + "disabilities");
  }

  deleteDisability(id: Number): Observable<any> {
    return this.http.delete(API_URL + "disabilities/" + id)
  }

  createDisability({name: disabilityName}): Observable<any> {
    return this.http.post(API_URL + "add-disability", {name: disabilityName});
  }

  getPlaces(): Observable<any> {
    return this.http.get(API_URL + "places");
  }

  deletePlace(id: Number): Observable<any> {
    return this.http.delete(API_URL + "places/" + id);
  }

  createPlace(place): Observable<any> {
    return this.http.post(API_URL + "add-place", place)
  }

  getPlaceById(id: Number): Observable<any> {
    return this.http.get(API_URL + "places/" + id)
  }

  updatePlace(id: Number, place): Observable<any> {
    return this.http.put(API_URL + "places/" + id, place);
  }

}
