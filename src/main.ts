import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Login } from './app/Component/login/login';
import { provideRouter, withHashLocation } from '@angular/router';
import { Home } from './app/Component/home/home';
import { Layout } from './app/Component/layout/layout';

const routes = [
  { path: '', component: Login },
  {path: '', component: Layout,
          children: [
              {
                  path: 'home', component: Home
              }
          ]
      }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes, withHashLocation())]
})
  .catch((err) => console.error(err));
