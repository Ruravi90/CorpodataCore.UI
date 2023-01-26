import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paginate } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VigilantsService {
  private url: string = environment.urlApi + 'Vigilances';
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
