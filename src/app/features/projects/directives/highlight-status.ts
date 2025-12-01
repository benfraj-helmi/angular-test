import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightStatus]',
  standalone: true
})
export class HighlightStatusDirective implements OnChanges {
  @Input('appHighlightStatus') status: string = '';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    const colors: any = {
      'En attente': 'bg-red-100 text-red-800',
      'En cours': 'bg-yellow-100 text-yellow-800',
      'Terminé': 'bg-green-100 text-green-800'
    };

    this.el.nativeElement.className = colors[this.status] + ' p-2 rounded';
  }
}
