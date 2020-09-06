import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomatto', 25),
  ];

  constructor() {}

  ngOnInit(): void {}
  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
