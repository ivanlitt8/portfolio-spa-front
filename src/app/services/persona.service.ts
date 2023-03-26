import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = environment.URL + 'persona/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]> {

    return this.httpClient.get<persona[]>(this.URL + 'lista');

  }

  public detail(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  public update(id: number, educacion: persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  // public save(educacion: persona): Observable<any> {
  //   return this.httpClient.post<any>(this.URL + 'create', educacion);
  // }

  // public delete(id: number): Observable<any> {
  //   return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  // }

}
