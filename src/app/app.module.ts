
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/pages/login/login.component';
import { CardsService } from './pages/cards/cardsService.service';
import { HomeComponent } from './pages/home/home.component';
import { CardDetailsComponent } from './pages/cards/pages/card-details/card-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CardsComponent } from './pages/cards/cards.components';
import {SharedModule} from './SharedModule.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './pages/auth/auth.guard';
import {AddCardFormComponent} from './components/addCardForm/addCardForm.component';

// firebase.initializeApp(environment.firebaseConfig);
// const firebaseApp = initializeApp(environment.firebaseConfig);
// const analytics = getAnalytics(firebaseApp);


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        CardDetailsComponent,
        CardsComponent,
        AddCardFormComponent
    ],
    providers: [CardsService, AuthGuard],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        SharedModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAnalyticsModule,
    ]
})
export class AppModule { 
   

}
