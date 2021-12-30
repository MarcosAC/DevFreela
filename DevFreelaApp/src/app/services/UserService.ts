import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/User';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseURL = `${environment.mainUrlAPI}users`;

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }

  post(user: User) {
    return this.http.post(this.baseURL, user);
  }

  put(login: Login, id: number) {
    return this.http.put(`${this.baseURL}/${id}/login`, login);
  }

}
