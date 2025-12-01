import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskList } from '../task-list/task-list';
import { StatusBadge } from '../status-badge/status-badge';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, TaskList, StatusBadge],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetail {
  @Input() project: any;

  getProgress() {
    if(!this.project.tasks || this.project.tasks.length === 0) return 0;
    return (this.project.tasks.filter((t: { status: string; }) => t.status === 'Terminé').length / this.project.tasks.length) * 100;
  }
}
