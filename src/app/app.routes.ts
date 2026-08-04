import { Routes } from '@angular/router';
import { Login } from './Component/login/login';
import { Home } from './Component/home/home';
import { Layout } from './Component/layout/layout';

export const routes: Routes = [
    {path: '', component: Login},
    {path: '', component: Layout,
        children: [
            {
                path: 'home', component: Home
            }
        ]
    }
];
