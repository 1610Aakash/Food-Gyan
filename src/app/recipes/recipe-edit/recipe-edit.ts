import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe-edit.html',
  styleUrls: ['./recipe-edit.scss']
})
export class RecipeEditComponent {
  recipe = {
    title: '',
    description: '',
    calories: 0,
    protein: 0,
    allergies: ''
  };

  updateRecipe() {
    console.log('Updated recipe:', this.recipe);
  }
}

