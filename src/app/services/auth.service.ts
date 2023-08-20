import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(
    private router: Router,
    private authentication: AuthenticationService
  ) {}
  //using canActivate authguard
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authentication.loginStatus()) {
      return true;
    } else {
      this.router.navigate(['signin']);
      return false;
    }
  }
}
