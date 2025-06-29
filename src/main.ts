
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoginComponent } from './app/auth/login/login';
import { RegisterComponent } from './app/auth/register/register';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/home/home.').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'recipes',
    loadComponent: () =>
      import('./app/recipes/recipe-list/recipe-list').then(m => m.RecipeListComponent)
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([]))
  ]
});

