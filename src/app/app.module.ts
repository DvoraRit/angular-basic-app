

import { AvatarComponent } from './components/avatar/avatar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from "./components/input/input.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import {PermissionDirective} from './directives/premission.directive';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { CardsService } from './pages/cards/cardsService.service';
import { HomeComponent } from './pages/home/home.component';
import { CardDetailsComponent } from './pages/cards/pages/card-details/card-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CardsComponent } from './pages/cards/cards.components';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        SearchComponent,
        CheckboxComponent,
        InputComponent,
        AvatarComponent,
        PermissionDirective,
        LoginComponent,
        HomeComponent,
        CardDetailsComponent,
        CardsComponent
    ],
    providers: [CardsService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        CardComponent,
        AppRoutingModule,
        HttpClientModule
    ]
})
export class AppModule { 
   

}
