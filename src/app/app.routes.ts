import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list';
import { RecipeAddComponent } from './recipes/recipe-add/recipe-add';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit';
import { HomeComponent } from './home/home.';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'add', component: RecipeAddComponent },
  { path: 'edit/:id', component: RecipeEditComponent }
];

