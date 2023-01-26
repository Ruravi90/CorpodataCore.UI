import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Client, Paginate } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
    private url: string = environment.urlApi + 'Clients';
    constructor(private http: HttpClient) {
    }

    get(): Observable<Paginate[]> {
        return this.http.get<Paginate[]>(this.url).pipe(map((r:any)=> r));
    }
    post(model: Client): Observable<any> {
        return this.http.post<any>(this.url, model).pipe(map((r:any)=> r));
    }
    put(model: Client): Observable<any> {
        return this.http.put<any>(this.url + '/' + model.id, model).pipe(map((r:any)=> r));
    }
    delete(id: number): Observable<any> {
        return this.http.delete<any>(this.url + '/' + id).pipe(map((r:any)=> r));
    }
}
