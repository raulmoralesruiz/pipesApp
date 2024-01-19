import { Pipe, PipeTransform } from '@angular/core';

// raul | toggleCase = 'RAUL'
// RAUL | toggleCase = 'raul'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
