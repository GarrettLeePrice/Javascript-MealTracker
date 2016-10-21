import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
<div class="background" style="background:url(resources/img/strawberries.jpeg);">
  <div class="container">
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
    </div>
    <div class="well">
      <meal-list [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"></meal-list>
      <edit-meal [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"></edit-meal>
      <new-meal (newMealSender)="addMeal($event)"></new-meal>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
