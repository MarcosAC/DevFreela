import { ProjectComment } from './../models/ProjectComment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  baseURL = `${environment.mainUrlAPI}projects`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Project> {
    return this.http.get<Project>(this.baseURL);
  }

  getById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseURL}/${id}`);
  }

  post(project: Project) {
    return this.http.post(this.baseURL, project);
  }

  put(id: number, project: Project) {
    return this.http.put(`${this.baseURL}/${id}`, project);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  postComment(id: number, projectCooment: ProjectComment) {
    return this.http.post(`${this.baseURL}/${id}`, projectCooment);
  }

  start(id: number, project: Project ) {
    return this.http.put(`${this.baseURL}/${id}/start`, project);
  }

  finish(id: number, project: Project) {
    return this.http.put(`${this.baseURL}/${id}/finish`, project);
  }
}
