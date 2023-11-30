import { Pipe, PipeTransform } from '@angular/core';
import { phoneFormat } from '../ulti/phone';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({
  standalone: true,
  name: 'FormatForm',
})
export class FormatForm implements PipeTransform {
  transform(value: string): string {
    console.log(value);

    return phoneFormat(value);
  }
}
