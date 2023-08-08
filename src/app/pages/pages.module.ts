import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../components/header/header.component';
import { PagesRoutingModule } from './pages-routing.module';
import {CardsService} from './cards/cardsService.service';
import { SharedModule } from '../SharedModule.module';
import { CommonModule } from '@angular/common';
import { MyCardsComponent } from './my-cards/my-cards/my-cards.component';

@NgModule({
  declarations: [PagesComponent, HeaderComponent, MyCardsComponent],
  imports: [ PagesRoutingModule, SharedModule, CommonModule],
  providers: [CardsService],
})
export class PagesModule {}
