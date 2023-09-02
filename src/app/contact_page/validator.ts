import { AbstractControl } from '@angular/forms';

export class Validator {
  static nameValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const name = control.value as string;
    console.log(name);
    if (name.trim().length < 3) {
      return { nameInvalid: true };
    }
    return null;
  }
}
