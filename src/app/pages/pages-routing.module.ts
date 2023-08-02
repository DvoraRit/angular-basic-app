import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.components';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CardDetailsComponent } from './cards/pages/card-details/card-details.component';
import { PagesComponent } from './pages.component';
import { CardsResolver } from './cards/cards.resolver';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'cards',
        component: CardsComponent,
        resolve: {
          cards: CardsResolver,
        },
      },
      {
        path:"cards/:id",
        component:CardDetailsComponent
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
