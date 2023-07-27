import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputModule } from '../input/input.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from '../avatar/avatar.moduls';
import {CardModule} from './card/card.module'

@NgModule({
    declarations:[
    ],
    providers: [],
    imports:[
        BrowserModule,
        InputModule,
        CheckboxModule,
        FormsModule,
        AvatarModule,
        CardModule
    ]
})

export class CardsModule{}