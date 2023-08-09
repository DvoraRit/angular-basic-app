import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {urls} from '../../../../../consts/urls';
import {AuthService} from '../../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup | any;
  passwordValue: string = '';
  authService : AuthService;
  loginFailed = false;
  constructor( private router: Router, private http: HttpClient){ 
    this.authService = new AuthService(http);
  }
  ngOnInit(){
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]  ),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.authService.login(this.signupForm?.value.email,this.signupForm?.value.password).subscribe((res:any)=>{
      localStorage.setItem("token", res.idToken);
      this.router.navigate([urls.routes.home]);
    },()=>{
      this.loginFailed = true;
    })
  }

}
