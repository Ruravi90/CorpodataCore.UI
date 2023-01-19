import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { environment } from '../../environments/environment';
import { User, Paginate } from '../models';

@Injectable()
export class UserService {
    private url: string = environment.urlApi + 'Users';
    private currentUser: User = new User();
    constructor(private http: HttpClient) {
    }

    get(): Observable<User[]> {
        return this.http.get<User[]>(this.url).pipe(map((r:any)=> r));
    }
    post(model: User): Observable<any> {
        return this.http.post<any>(this.url, model).pipe(map((r:any)=> r));
    }
    put(model: User): Observable<any> {
        return this.http.put<any>(this.url + '/' + model.id, model).pipe(map((r:any)=> r));
    }
    delete(id: number): Observable<any> {
        return this.http.delete<any>(this.url + '/' + id).pipe(map((r:any)=> r));
    }
}
