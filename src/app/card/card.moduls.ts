
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { InputModule } from '../input/input.module';
import { AvatarModule } from '../avatar/avatar.moduls';
@NgModule({
    declarations: [
        
    ],
    imports: [
        BrowserModule,
        InputModule,
        CheckboxModule,
        AvatarModule
    ],
    providers: [],
    // exports: [
    //     InputComponent,
    //     CheckboxComponent
    // ]
})
export class CardModule { }
