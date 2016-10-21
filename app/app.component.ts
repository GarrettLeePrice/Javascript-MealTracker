import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
      <h1>Meal Tracker</h1>
      <h3 (click)="showDetails(currentMeal)" *ngFor="let currentMeal of meals">{{ currentMeal.name }}</h3>
      <h1>Edit Meal</h1>
    <div>
    <label>Enter Meal Name:</label>
    <input [(ngModel)]="selectedMeal.name">
    </div>
    <div>
      <label>Enter Meal Description:</label>
      <input [(ngModel)]="selectedMeal.description">
    </div>
    <div>
    <label>Enter Calories:</label>
    <input [(ngModel)]="selectedMeal.calories">
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [
  new Meal("Tasty Tacos", "delicous tacos", 354),
  new Meal("Meat Pie", "delicous tacos", 354),
  new Meal("Fish Burritos", "delicous tacos", 354),
  new Meal("Cat Tongue", "delicous tacos", 354),
  ];
  selectedMeal: Meal = this.meals[0];
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;

  }
}

export class Meal {
  constructor(public name: string,  descritption: string, calories: number) { }
}
