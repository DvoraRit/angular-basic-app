import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../components/header/header.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        PagesComponent,
        HeaderComponent
    ],
    imports: [
        HttpClientModule,
        PagesRoutingModule,
        CommonModule
    ],
})
export class PagesModule {
}