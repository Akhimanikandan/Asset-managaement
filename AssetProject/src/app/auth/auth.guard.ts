import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../loginservice';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanActivateChild{
  constructor(private loginservice:LoginService, private router:Router){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.loginservice.isAuthenticated()) {
        this.router.navigate(['']);
        console.log("not auth");
        
        return false;
      }
     else return true;
  }
  
}
