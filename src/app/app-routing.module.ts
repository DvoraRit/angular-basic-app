import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CardsComponent } from './pages/cards/cards.components';
import { HomeComponent } from './pages/home/home.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
const appRoutes: Routes = [
    {path:"login", component:LoginComponent},
    {path:'',component:HeaderComponent, children:[
        { path: '', component: HomeComponent},
        { path: 'cards', component: CardsComponent,children:[
            { path: ':id', component: CardDetailsComponent },
        ]  },

    ]},
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}