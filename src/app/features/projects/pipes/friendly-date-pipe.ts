import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendlyDate',
  standalone: true
})
export class FriendlyDatePipe implements PipeTransform {
  transform(value: Date): string {
    const diff = Math.floor((new Date().getTime() - new Date(value).getTime()) / (1000*60*60*24));
    if(diff === 0) return 'Aujourd’hui';
    if(diff === 1) return 'Hier';
    return `Il y a ${diff} jours`;
  }
}
