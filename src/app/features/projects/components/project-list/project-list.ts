import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FriendlyDatePipe } from '../../pipes/friendly-date-pipe';
import { EditProject } from '../edit-project/edit-project';
import { ProjectDetail } from '../project-detail/project-detail';
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskList, ProjectDetail, EditProject, FriendlyDatePipe ],
  templateUrl: './project-list.html'
})
export class ProjectList {
  @Input() projects: any[] = [];
  @Output() projectsChange = new EventEmitter<any[]>();

  searchTerm = '';
  selectedProject: any = null;
  editingProject: any = null;

  startEdit(project: any) { this.editingProject = { ...project, originalRef: project }; }
  cancelEdit() { this.editingProject = null; }

  saveEdit(updated: any) {
    const index = this.projects.indexOf(updated.originalRef);
    if (index !== -1) {
      this.projects[index] = { ...updated, dateDeb: new Date(updated.dateDeb), dateFin: new Date(updated.dateFin) };
    }
    this.editingProject = null;
    this.projectsChange.emit(this.projects);
  }

  selectProject(project: any) { this.selectedProject = project; }

  filteredProjects() {
    return this.projects.filter(p => p.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  addNewProject(newProj: any) {
    this.projects.push({ ...newProj, dateDeb: new Date(newProj.dateDeb), dateFin: new Date(newProj.dateFin), tasks: [] });
    this.projectsChange.emit(this.projects);
  }

  title = 'Project Manager';
}
