import { CardModule } from './cards/card/card.module';


import { AvatarModule } from './avatar/avatar.moduls';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { InputModule } from "./input/input.module";
import { CheckboxModule } from "./checkbox/checkbox.module";
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        SearchComponent,
        HeaderComponent,
        CardsComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        InputModule,
        CheckboxModule,
        FormsModule,
        AvatarModule,
        CardModule,
    ]
})
export class AppModule { }
