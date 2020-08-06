import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDateFormatter'
})
export class CustomDateFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
