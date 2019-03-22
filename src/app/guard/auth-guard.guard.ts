import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor( private router: Router, private jwtHelper: JwtHelperService){

  }

  canActivate( next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const jwt = localStorage.getItem('Authorization');

      /*************** to execute all this operations we should inhject  JwtHelperService in the constructor   */
      // to decode our token and get all informations { roles, username .... } in it 
      // const decodedToken = this.jwtHelper.decodeToken(jwt);
      // console.log(" DecodedToken  ", decodedToken.roles);

      // to get expiration date from our token 
      // const expirationDate = this.jwtHelper.getTokenExpirationDate(jwt);
      // console.log(" expirationDate  ", expirationDate);
      
      // check if the token is already expired and forward the user to the authentication page

      const isExpired = this.jwtHelper.isTokenExpired(jwt);

      if( isExpired ){

        localStorage.removeItem('Authorization');
        this.router.navigate( ['/login']);
        return false;
      
      }
      
    return true;
  }
}
