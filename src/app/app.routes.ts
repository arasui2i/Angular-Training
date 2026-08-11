import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Home } from './component/home/home';
import { Layout } from './component/layout/layout';
import { authGuard } from '../auth.guard';
import { Logout } from './component/logout/logout';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'logout', component: Logout},
    {path: '', component: Layout,
        children: [
            {
                path: 'home', component: Home
            }
        ],
        canActivate: [authGuard]
    }
];
