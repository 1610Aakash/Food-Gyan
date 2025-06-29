import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list';
import { AuthGuard } from './guards/auth-guard';
import { RecipeAddComponent } from './recipes/recipe-add/recipe-add';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recipes', component: RecipeListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: RecipeAddComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: RecipeEditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

