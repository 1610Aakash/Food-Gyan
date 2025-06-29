
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeService, Recipe } from '../recipe.service';

@Component({
  standalone: true,
  selector: 'app-recipe-list',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './recipe-list.html',
  styleUrls: ['./recipe-list.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  showForm = false;
  isEditMode = false;
  currentRecipeId: number | null = null;

  formRecipe: Recipe = {
    id: 0,
    title: '',
    description: '',
    calories: 0,
    protein: 0,
    allergies: ''
  };

  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getAllRecipes();
  }

  openAddForm() {
    this.showForm = true;
    this.isEditMode = false;
    this.formRecipe = {
      id: 0,
      title: '',
      description: '',
      calories: 0,
      protein: 0,
      allergies: ''
    };
  }

  openEditForm(recipe: Recipe) {
    this.showForm = true;
    this.isEditMode = true;
    this.currentRecipeId = recipe.id;
    this.formRecipe = { ...recipe };
  }

  saveRecipe() {
    if (this.isEditMode && this.currentRecipeId !== null) {
      this.recipeService.updateRecipe(this.currentRecipeId, this.formRecipe);
    } else {
      this.recipeService.addRecipe(this.formRecipe);
    }
    this.recipes = this.recipeService.getAllRecipes();
    this.showForm = false;
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
    this.recipes = this.recipeService.getAllRecipes();
  }

  cancelForm() {
    this.showForm = false;
  }
}

