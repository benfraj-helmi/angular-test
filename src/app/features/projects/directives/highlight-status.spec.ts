import { HighlightStatusDirective } from './highlight-status';
import { ElementRef } from '@angular/core';

describe('HighlightStatusDirective', () => {
  it('should create an instance', () => {
    const mockEl = { nativeElement: document.createElement('span') } as ElementRef;
    const directive = new HighlightStatusDirective(mockEl);
    expect(directive).toBeTruthy();
  });
});
