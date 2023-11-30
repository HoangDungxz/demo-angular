import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if ((control.value as string)?.length < 3) {
      return {
        phoneLength: true,
      };
    }
    return null;
  };
}
