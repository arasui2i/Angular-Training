import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { LoginComponent } from './app/login-component/login-component';
import { provideRouter, withHashLocation } from '@angular/router';
import { HomeComponent } from './app/home-component/home-component';
import { LayoutComponent } from './app/layout-component/layout-component';

const routes = [
  { path: '', component: LoginComponent },
  {path: '', component: LayoutComponent,
          children: [
              {
                  path: 'home', component: HomeComponent
              }
          ]
      }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes, withHashLocation())]
})
  .catch((err) => console.error(err));
