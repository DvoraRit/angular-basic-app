import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges } from '@angular/core';
import { userRoles } from 'src/consts/userRoles';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private http: HttpClient) {
    
  }
}
