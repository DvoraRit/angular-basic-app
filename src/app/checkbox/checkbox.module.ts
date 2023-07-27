import {CheckboxComponent} from './checkbox.component';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CheckboxComponent
    ],
    exports: [
        CheckboxComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CheckboxModule {
}