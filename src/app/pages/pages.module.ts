import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../components/header/header.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import {CardsService} from '../services/cardsService.service';
import { ButtonComponent } from '../components/button/button.component';
import { CardComponent } from '../components/card/card.component';
import { CardsComponent } from './cards/cards.components';
import { AvatarComponent } from '../components/avatar/avatar.component';
@NgModule({
    declarations: [
        PagesComponent,
        HeaderComponent,
        ButtonComponent,
        CardsComponent,
        AvatarComponent
    ],
    imports: [
        HttpClientModule,
        PagesRoutingModule,
        CommonModule,
        CardComponent
    ],
    providers: [CardsService]
})
export class PagesModule {
}