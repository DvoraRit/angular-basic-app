
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from '../../checkbox/checkbox.module';
import { InputModule } from '../../input/input.module';
import { AvatarModule } from '../../avatar/avatar.moduls';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        BrowserModule,
        InputModule,
        CheckboxModule,
        AvatarModule,
        CommonModule
    ],
    providers: [],
    exports: [
        CardComponent
    ]
})
export class CardModule { 
   

}
