import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityColor',
  standalone: true
})
export class PriorityColorPipe implements PipeTransform {
  transform(value: string): string {
    return value === 'Haute' ? 'text-red-500' :
           value === 'Moyenne' ? 'text-yellow-500' :
           'text-green-500';
  }
}
