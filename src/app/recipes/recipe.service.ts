// src/app/recipes/recipe.service.ts
import { Injectable } from '@angular/core';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  calories: number;
  protein: number;
  allergies: string;
}

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      title: 'Paneer Tikka',
      description: 'Grilled paneer with spices',
      calories: 250,
      protein: 18,
      allergies: 'Dairy'
    },
    {
      id: 2,
      title: 'Fruit Salad',
      description: 'Mixed seasonal fruits',
      calories: 120,
      protein: 2,
      allergies: 'None'
    }
  ];

  getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  addRecipe(recipe: Recipe): void {
    recipe.id = Date.now(); // generate unique ID
    this.recipes.push(recipe);
  }

  updateRecipe(id: number, updated: Recipe): void {
    const index = this.recipes.findIndex(r => r.id === id);
    if (index > -1) {
      this.recipes[index] = { ...updated, id };
    }
  }

  deleteRecipe(id: number): void {
    this.recipes = this.recipes.filter(r => r.id !== id);
  }
}
