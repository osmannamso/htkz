import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({providedIn: 'root'})
export class CustomValidators {
  constructor() {}

  public static compareNights() {
    return (formGroup: FormGroup) => {
      if (formGroup.get('nights').value > formGroup.get('nightsTo').value) {
        formGroup.get('nightsTo').setErrors({nightsLess: true});
      }
    }
  }

  public static dateRange(range: number) {
    const today: Date = new Date();
    return (formControl: FormControl) => {
      const diffDays = Math.ceil(((new Date(formControl.value) as any) - (today as any)) / (1000 * 60 * 60 * 24));
      return diffDays < 1 || diffDays > range ? {rangeIncorrect: true} : null;
    }
  }
}
