import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusEmoji',
  standalone: true
})
export class StatusEmojiPipe implements PipeTransform {
  transform(value: string): string {
    return value === 'Terminé' ? '✅' :
           value === 'En cours' ? '⏳' :
           '🛑';
  }
}
