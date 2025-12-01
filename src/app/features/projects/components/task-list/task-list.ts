import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightStatusDirective } from '../../directives/highlight-status';
import { PriorityColorPipe } from '../../pipes/priority-color-pipe';
import { StatusEmojiPipe } from '../../pipes/status-emoji-pipe';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, HighlightStatusDirective, PriorityColorPipe, StatusEmojiPipe],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskList {
  @Input() tasks: any[] = [];
  @Output() statusChanged = new EventEmitter<any>();

  changeStatus(task: any) {
    if(task.status === 'En attente') task.status = 'En cours';
    else if(task.status === 'En cours') task.status = 'Terminé';
    this.statusChanged.emit(task);
  }
}
