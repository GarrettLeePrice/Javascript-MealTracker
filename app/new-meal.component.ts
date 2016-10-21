import { Component, Output, EventEmitter }  from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Enter Meal Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Meal Details:</label>
      <input #newDetails>
    </div>
    <div>
      <label>Enter Calories:</label>
      <input #newCalories>
      <button (click)="addClicked(newName.value, newDetails.value, newCalories.value); newName.value='';
      newDetails.value='';
      newCalorie.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
