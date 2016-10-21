import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="showAll" selected="selected">Show all meals</option>
    <option value="under500">Show meals under 500 calories</option>
    <option value="over500">Show meals over 500 calories</option>

  </select>
    <div *ngFor="let currentMeal of childMealList | calorieAmount:selectedAmmount">
      <h2>{{ currentMeal.name }}</h2>
      <h5>Details: {{ currentMeal.details }}</h5>
      <h5>Calories: {{ currentMeal.calories }}</h5>

      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  public selectedAmmount: string = "showAll";
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  onChange(optionFromMenue) {
    this.selectedAmmount = optionFromMenue;
  }
}
