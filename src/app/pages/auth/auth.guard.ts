import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router'
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { urls } from 'src/consts/urls';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private route:Router) {}
    
    canActivate(route :ActivatedRouteSnapshot, state:RouterStateSnapshot) :
    boolean| UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
       let userAuth = localStorage.getItem("token");
        if(userAuth){
        return true;
        }
        else{
           return  this.route.createUrlTree([urls.routes.login])
        }
    }
} 