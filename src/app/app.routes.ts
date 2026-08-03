import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { HomeComponent } from './home-component/home-component';
import { LayoutComponent } from './layout-component/layout-component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: '', component: LayoutComponent,
        children: [
            {
                path: 'home', component: HomeComponent
            }
        ]
    }
];
