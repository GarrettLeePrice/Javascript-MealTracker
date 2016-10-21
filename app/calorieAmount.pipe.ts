import { Pipe,PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorieAmount",
  pure: false
})
export class CalorieAmountPipe implements PipeTransform {
  transform(input: Meal[], calorieLevel) {
    var output: Meal[] = [];
    if(calorieLevel === "under500"){
    for (var i =0; i < input.length; i++) {
      if (input[i].calories <= 500) {
        output.push(input[i]);
      }
    }
    return output;
  }
    else if(calorieLevel === "over500"){
    for (var i =0; i < input.length; i++) {
      if (input[i].calories >= 500) {
        output.push(input[i]);
    }
  }
    return output;
  } else {
    return input;
    }
  }
}
