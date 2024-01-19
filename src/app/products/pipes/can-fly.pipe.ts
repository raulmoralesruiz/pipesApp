import { Pipe, PipeTransform } from '@angular/core';

//  true | canFly = 'Si'
// false | canFly = 'No'

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Si' : 'No';
  }
}
