
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from "./components/input/input.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { CardComponent } from './components/card/card.component';
import {PermissionDirective} from './directives/permission.directive';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { AvatarComponent } from './components/avatar/avatar.component';


@NgModule({
    declarations: [
        ButtonComponent,
        CheckboxComponent,
        InputComponent,
        PermissionDirective,
        SearchComponent,
        AvatarComponent,
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        CardComponent,
    ],
    exports: [
        ButtonComponent,
        CheckboxComponent,
        InputComponent,
        CardComponent,
        SearchComponent,
        AvatarComponent,
        PermissionDirective
    ]
})

export class SharedModule { }