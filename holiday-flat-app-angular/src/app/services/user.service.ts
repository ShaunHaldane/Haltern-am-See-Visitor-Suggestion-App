import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/user/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getInterests(): Observable<any> {
    return this.http.get(API_URL + "interests");
  }

  getDisabilities(): Observable<any> {
    return this.http.get(API_URL + "disabilities");
  }

  createVisitor(visitor): Observable<any> {
    return this.http.post(API_URL + "register-visitor", visitor)
  }

  getVisitors(): Observable<any> {
    return this.http.get(API_URL + "visitors");
  }

  deleteVisitor(id: Number): Observable<any> {
    return this.http.delete(API_URL + "visitor/" + id);
  }

  getRecomendedPlaces(): Observable<any> {
    return this.http.get(API_URL + "plan");
  }

  createComment(placeId: number, comment: any): Observable<any> {
    return this.http.post(API_URL + 'add-comment/' + placeId, comment);
  }
  
}
