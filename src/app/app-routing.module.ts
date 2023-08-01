import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/pages.module')
          .then(m => m.PagesModule),
    },
    {path:"login", component:LoginComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}