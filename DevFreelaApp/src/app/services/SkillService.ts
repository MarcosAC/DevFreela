import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})

export class SkillService {

  baseURL = `${environment.mainUrlAPI}projects`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Skill> {
    return this.http.get<Skill>(this.baseURL);
  }
}
