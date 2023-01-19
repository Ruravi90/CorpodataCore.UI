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
    return false;
  }
  getToken():string{
    return "";
  }
  logout():Observable<any> {
    return this.http.post<any>(environment.urlApi + 'Admin/Authenticate/login',null).pipe(map((r:any)=> r));
  }
}
