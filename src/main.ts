import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Login } from './app/component/login/login';
import { provideRouter, withHashLocation } from '@angular/router';
import { Home } from './app/component/home/home';
import { Layout } from './app/component/layout/layout';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [provideRouter(routes, withHashLocation())]
})
  .catch((err) => console.error(err));
