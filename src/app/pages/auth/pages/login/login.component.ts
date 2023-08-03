import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {urls} from '../../../../../consts/urls';
import {AuthService} from '../../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f') signupForm: NgForm | undefined;

  authService : AuthService;
  loginFailed = false;
  constructor( private router: Router, private http: HttpClient){ 
    this.authService = new AuthService(http);
  }

  onSubmit() {
    this.authService.login(this.signupForm?.value.email,this.signupForm?.value.password).subscribe((res:any)=>{
      localStorage.setItem("token", res.data.token);
      this.router.navigate([urls.routes.home]);
    },(err)=>{
      this.loginFailed = true;
    })
  }

}
