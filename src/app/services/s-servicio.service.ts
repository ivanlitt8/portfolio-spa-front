import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio } from '../model/servicio';

@Injectable({
  providedIn: 'root'
})
export class SServicioService {
  URL = environment.URL + 'services/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Servicio[]> {

    return this.httpClient.get<Servicio[]>(this.URL + 'lista');

  }

  public detail(id: number): Observable<Servicio> {
    return this.httpClient.get<Servicio>(this.URL + `detail/${id}`);
  }

  public save(servicio: Servicio): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', servicio);
  }

  public update(id: number, servicio: Servicio): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, servicio);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
