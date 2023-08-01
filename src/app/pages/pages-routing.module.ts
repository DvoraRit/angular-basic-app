import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "../components/header/header.component";
import { CardsComponent } from "./cards/cards.components";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path:"",
        component:HeaderComponent,
        children:[
            {
                path:"cards",
                component:CardsComponent
            },
            {
                path:"home",
                component:HomeComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PagesRoutingModule {
  }