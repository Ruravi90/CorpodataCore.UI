import { environment } from '../../environments/environment';
import { Paginate } from '../models/paginate.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndustrialPropertyProcessService {
  private url: string = environment.urlApi + 'IndustrialPropertyProcesses';
  constructor(private http: HttpClient) {
  }
  get(): Observable<Paginate[]> {
    return this.http.get<Paginate[]>(this.url).pipe(map((r:any)=> r));
  }
  post(model: any): Observable<any> {
      return this.http.post<any>(this.url, model).pipe(map((r:any)=> r));
  }
  put(model: any): Observable<any> {
      return this.http.put<any>(this.url + '/' + model.id, model).pipe(map((r:any)=> r));
  }
  delete(id: number): Observable<any> {
      return this.http.delete<any>(this.url + '/' + id).pipe(map((r:any)=> r));
  }
}
