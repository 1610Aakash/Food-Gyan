import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  calories: number;
  protein: number;
  allergies: string;
}

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private api = 'http://localhost:5000/api/recipes';

  constructor(private http: HttpClient) {}

  addRecipe(recipe: Recipe, email: string): Observable<any> {
    return this.http.post(`${this.api}/add`, { ...recipe, email });
  }

  getRecipesForUser(email: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.api}/user/${email}`);
  }
}

