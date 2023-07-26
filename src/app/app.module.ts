import { AvatarModule } from './avatar/avatar.moduls';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { InputModule } from "./input/input.module";
import { CheckboxModule } from "./checkbox/checkbox.module";
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        CardComponent,
        SearchComponent,
        HeaderComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        InputModule,
        CheckboxModule,
        FormsModule,
        AvatarModule
    ]
})
export class AppModule { }
