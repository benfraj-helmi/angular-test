import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-root p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-4">
      <div class="progress-ring flex-shrink-0">
        <svg viewBox="0 0 120 120" class="w-28 h-28">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#60a5fa" />
              <stop offset="100%" stop-color="#1d4ed8" />
            </linearGradient>
          </defs>

          <circle cx="60" cy="60" r="50" stroke="#e6eefc" stroke-width="12" fill="none" />

          <circle cx="60" cy="60" r="50"
            stroke="url(#grad)"
            stroke-width="12"
            fill="none"
            stroke-linecap="round"
            [attr.stroke-dasharray]="circumference"
            [attr.stroke-dashoffset]="progressOffset()"
            transform="rotate(-90 60 60)"
          />

          <text x="60" y="66" text-anchor="middle" font-size="18" fill="#1f2937">
            {{ getGlobalProgress() | number:'1.0-0' }}%
          </text>
        </svg>
      </div>

      <div class="stats w-full sm:w-auto">
        <div class="text-sm text-gray-500">Total projets</div>
        <div class="text-2xl font-semibold text-gray-800">{{ projects.length || 0 }}</div>

        <div class="mt-2 text-sm text-gray-500">Total tâches</div>
        <div class="text-lg font-medium text-gray-800">{{ getTotalTasks() }}</div>

        <div class="mt-2 text-sm text-gray-500">Progression globale</div>
        <div class="text-lg font-medium text-gray-800">{{ getGlobalProgress() | number:'1.0-0' }}%</div>
      </div>
    </div>
  `
})
export class Dashboard {
  @Input() projects: any[] = [];

  private r = 50;
  circumference = 2 * Math.PI * this.r;

  getTotalTasks() {
    return (this.projects || []).reduce((acc, p) =>
      acc + (p.tasks ? p.tasks.length : 0), 0);
  }

  getGlobalProgress() {
    const totalTasks = this.getTotalTasks();
    const done = (this.projects || []).reduce((sum, p) =>
      sum + (p.tasks ? p.tasks.filter((t: any) => t.status === 'Terminé').length : 0), 0);

    return totalTasks === 0 ? 0 : (done / totalTasks) * 100;
  }

  progressOffset() {
    const pct = Math.min(100, Math.max(0, this.getGlobalProgress()));
    return (this.circumference - (pct / 100) * this.circumference).toFixed(2);
  }
}
