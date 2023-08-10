
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { Store } from '@ngrx/store';
import { ICard } from './interfaces/card.interface';
import { Init } from './store/cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {

  constructor(
    private analytics: AngularFireAnalytics,
    private store: Store<{ cart: ICard[] }>
    ) {  }

  ngOnInit() {
    // this.store.dispatch(init());
    this.store.dispatch(new Init());
  }
  
  ngAfterViewInit() {
    this.analytics.logEvent('user entered the app');
  }
}
