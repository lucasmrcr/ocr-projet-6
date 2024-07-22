import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  /**
   * Check if the user is authenticated
   *
   * @param next
   * @param state
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!sessionStorage.getItem('token')) {
      void this.router.navigateByUrl('/auth/login');
      return false;
    } else {
      return true;
    }
  }
}
