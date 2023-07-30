

import { AvatarComponent } from './components/avatar/avatar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from "./components/input/input.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import {PermissionDirective} from './directives/premission.directive';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        SearchComponent,
        HeaderComponent,
        CheckboxComponent,
        InputComponent,
        AvatarComponent,
        PermissionDirective
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        CardComponent
    ]
})
export class AppModule { 
   

}
