import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-root p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-4">

      <!-- Cercle de progression -->
      <div class="progress-ring flex-shrink-0">
        <svg viewBox="0 0 120 120" class="w-28 h-28">
          <circle
            cx="60" cy="60" r="50"
            stroke="#e6eefc" stroke-width="12" fill="none" />
          <circle
            cx="60" cy="60" r="50"
            stroke="#1d4ed8" stroke-width="12" fill="none"
            stroke-linecap="round"
            [attr.stroke-dasharray]="circumference"
            [attr.stroke-dashoffset]="progressOffset()"
            transform="rotate(-90 60 60)" />
          <text x="60" y="66" text-anchor="middle" font-size="18" fill="#1f2937">
            {{ getGlobalProgress() | number:'1.0-0' }}%
          </text>
        </svg>
      </div>

      <!-- Statistiques -->
      <div class="stats w-full sm:w-auto space-y-1">
        <div><strong>Total projets:</strong> {{ projects?.length || 0 }}</div>
        <div><strong>Total tâches:</strong> {{ getTotalTasks() }}</div>
        <div><strong>Progression globale:</strong> {{ getGlobalProgress() | number:'1.0-0' }}%</div>
      </div>

    </div>
  `,
  styles: [`
    .dashboard-root { display: flex; align-items: center; justify-content: space-between; }
    .progress-ring { margin-right: 1rem; }
    .stats div { font-size: 0.9rem; }
  `]
})
export class Dashboard {
  @Input() projects: any[] = [];

  private r = 50;
  circumference = 2 * Math.PI * this.r;

  getTotalTasks(): number {
    return this.projects?.reduce((acc, p) => acc + (p.tasks?.length || 0), 0) || 0;
  }

  getGlobalProgress(): number {
    const totalTasks = this.getTotalTasks();
    if (totalTasks === 0) return 0;
    const doneTasks = this.projects?.reduce(
      (sum, p) => sum + (p.tasks?.filter((t: { status: string; }) => t.status === 'Terminé').length || 0),
      0
    ) || 0;
    return (doneTasks / totalTasks) * 100;
  }

  progressOffset(): string {
    const pct = Math.min(100, Math.max(0, this.getGlobalProgress()));
    return (this.circumference - (pct / 100) * this.circumference).toFixed(2);
  }
}
