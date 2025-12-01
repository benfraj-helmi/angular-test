import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<span [ngClass]="{
    'bg-green-200 text-green-800 px-2 py-1 rounded': status==='Terminé',
    'bg-yellow-200 text-yellow-800 px-2 py-1 rounded': status==='En cours',
    'bg-gray-200 text-gray-800 px-2 py-1 rounded': status==='En attente'
  }">{{status}}</span>`,
})
export class StatusBadge {
  @Input() status: string = '';
}
