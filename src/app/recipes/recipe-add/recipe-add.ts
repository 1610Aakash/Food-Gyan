import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe-add.html',
  styleUrls: ['./recipe-add.scss']
})
export class RecipeAddComponent {
  recipe = {
    title: '',
    description: '',
    calories: 0,
    protein: 0,
    allergies: ''
  };

  addRecipe() {
    console.log(this.recipe);
  }
}


