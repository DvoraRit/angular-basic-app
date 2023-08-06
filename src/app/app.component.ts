
import { Component, AfterViewInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

  constructor(
    private analytics: AngularFireAnalytics
    ) {  }
  ngAfterViewInit() {
    
    this.analytics.logEvent('user entered the app');
  }
}
