import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getDataFromToken } from '../utils/jwtparser';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(activatedRoute: ActivatedRouteSnapshot) {

    const scopes = getDataFromToken().scopes;
    if (scopes.includes(activatedRoute.url[0].path)) {
      return true;
    } else {
      console.error('Unauthorized');
      this.router.navigate(['/']);
      return false;
    }
  }
}



