import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddProject } from './features/projects/components/add-project/add-project';
import { ProjectList } from './features/projects/components/project-list/project-list';
import { Dashboard } from './features/projects/components/dashboard/dashboard';
import { ContactForm } from './features/contact-form/contact-form/contact-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, AddProject, ProjectList, Dashboard, ContactForm],
  templateUrl: './app.html',
})
export class App {
  title = signal('Project Manager');
  show: 'list' | 'add' | 'dashboard' | 'contact' = 'list';

  projects: any[] = [
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
    }
  ];

  addNewProject(project: any) {
  this.projects.push({
    ...project,
    dateDeb: new Date(project.dateDeb),
    dateFin: new Date(project.dateFin),
    tasks: []
  });
  this.show = 'list'; // revenir à la liste après ajout
}

}
