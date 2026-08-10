import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Home } from './component/home/home';
import { Layout } from './component/layout/layout';

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
