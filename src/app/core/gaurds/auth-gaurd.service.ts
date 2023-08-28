import { Injectable } from '@angular/core';
import
{
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGaurdService implements CanActivate
{
  constructor (
    private router: Router, //declaring router & authentication
    private authentication: AuthenticationService
  ) { }
  //using canActivate authguard
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean
  {
    if (this.authentication.loginStatus()) {
      //controling state true for authentication successful
      return true;
    } else {
      this.router.navigate(['signin']); //controling state as false for authentication reject and redirect to sigin
      return false;
    }
  }
}
