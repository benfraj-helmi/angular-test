import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddProject } from '../add-project/add-project';
import { Dashboard } from '../dashboard/dashboard';
import { TaskList } from '../task-list/task-list';
import { ProjectDetail } from '../project-detail/project-detail';

import { StatusEmojiPipe } from '../../pipes/status-emoji-pipe';
import { EditProject } from '../edit-project/edit-project';
import { FriendlyDatePipe } from '../../pipes/friendly-date-pipe';


@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AddProject,
    Dashboard,
    TaskList,
    ProjectDetail,
  
    StatusEmojiPipe,
    EditProject,
    FriendlyDatePipe
  ],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class ProjectList {

  title = 'Project Manager';
  searchTerm = '';
  selectedProject: any = null;

  editingProject: any = null; // formulaire d’édition

  startEdit(project: any) {
    this.editingProject = {
      ...project,
      originalRef: project 
    };
  }

  cancelEdit() {
    this.editingProject = null;
  }

  saveEdit(updated: any) {
    const index = this.projects.indexOf(updated.originalRef);
    
    if (index !== -1) {
      this.projects[index] = {
        ...updated,
        dateDeb: new Date(updated.dateDeb),
        dateFin: new Date(updated.dateFin)
      };
    }

    this.editingProject = null;
  }

  projects = [
    {
      name: 'Projet 1',
      description: 'Description 1',
      dateDeb: new Date('2023-05-10'),
      dateFin: new Date('2025-10-17'),
      status: 'En cours',
      tasks: [
        { title: 'Tâche 1', priority: 'Haute', status: 'En attente' },
        { title: 'Tâche 2', priority: 'Moyenne', status: 'En cours' }
      ]
    },
    {
      name: 'Projet 2',
      description: 'Description 2',
      dateDeb: new Date('2024-01-15'),
      dateFin: new Date('2026-02-10'),
      status: 'Terminé',
      tasks: [
        { title: 'Tâche 1', priority: 'Basse', status: 'Terminé' }
      ]
    },
    {
      name: 'Projet 3',
      description: 'Description 3',
      dateDeb: new Date('2025-02-05'),
      dateFin: new Date('2026-02-10'),
      status: 'En cours',
      tasks: [
        { title: 'Tâche 1', priority: 'Moyenne', status: 'En cours' }
      ]
    }
  ];

  selectProject(project: any) {
    this.selectedProject = project;
  }

  filteredProjects() {
    return this.projects.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addNewProject(newProj: any) {
    this.projects.push({
      ...newProj,
      dateDeb: new Date(newProj.dateDeb),
      dateFin: new Date(newProj.dateFin),
      tasks: []
    });
  }
}
