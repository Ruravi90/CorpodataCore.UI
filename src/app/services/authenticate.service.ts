import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { environment } from '../../environments/environment';
import { User  } from '../models';

@Injectable()
export class AuthenticateService{
  constructor(private http: HttpClient) {
  }
  login(model: User): Observable<any> {
      return this.http.post<any>(environment.urlApi + 'Admin/Authenticate/login', model).pipe(map((r:any)=> r));
  }
  isLogin(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    if (currentUser) {
        return true;
    }
    return false;
  }
  getToken():string{
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    if (localStorage.getItem('currentUser')) {
        return currentUser.token;
    }
    return '';
  }
  logout():Observable<any> {
    return this.http.post<any>(environment.urlApi + 'Admin/Authenticate/login',null).pipe(map((r:any)=> r));
  }
}
