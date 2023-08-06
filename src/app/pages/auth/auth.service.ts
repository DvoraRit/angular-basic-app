import { HttpClient } from '@angular/common/http';
import { urls } from '../../../consts/urls';
import { Injectable } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Injectable({providedIn:'root'})
export class AuthService {
    httpClient = new HttpService(this.http);
    constructor(private http: HttpClient) {}
    login(email:string,password:string) {
        let data =  {
            email:email,
            password:password,
            returnSecureToken:true
        }
        let res =  this.httpClient.login(data);
        return res;
    }
}