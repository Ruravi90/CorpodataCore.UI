import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService  } from '../services';

@Injectable()
export class AlwaysAuthGuard implements CanActivate, CanActivateChild {
  constructor(private authS: AuthenticateService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (!this.authS.isLogin()) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }
    return true;
  }

  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if (!this.authS.isLogin()) {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
      }
      return true;
  }
}
