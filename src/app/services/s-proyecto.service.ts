import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {

  URL = 'http://localhost:8080/proyectos/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Project[]> {

    return this.httpClient.get<Project[]>(this.URL + 'lista');

  }

  public detail(id: number): Observable<Project> {
    return this.httpClient.get<Project>(this.URL + `detail/${id}`);
  }

  public save(proyecto: Project): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', proyecto);
  }

  public update(id: number, proyecto: Project): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
