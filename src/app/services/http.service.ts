
import { HttpClient } from '@angular/common/http';
import { urls } from '../../consts/urls';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url: string) {
   let res =   this.http.get(urls.firebase + url);
   return res;
  }
  login(data:any){
    let res =  this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`, data);
    return res;
  }
   post(url: string, data: any, baseUrl:string=urls.firebase ) {
    let res=  this.http.post(baseUrl + url, data);
    return res;
  }
  put(url: string, data: any) {
    let res=  this.http.put(urls.firebase + url, data);
    return res;
  }
}