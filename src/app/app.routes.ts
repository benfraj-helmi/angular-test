import { Routes } from '@angular/router';
import { ProjectList } from './features/projects/components/project-list/project-list';
import { AddProject } from './features/projects/components/add-project/add-project';
import { Dashboard } from './features/projects/components/dashboard/dashboard';
import { ContactForm } from './features/contact-form/contact-form/contact-form';

export const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectList, data: { title: 'Projects' } },
  { path: 'add', component: AddProject },
  { path: 'dashboard', component: Dashboard },
  { path: 'contact', component: ContactForm },
];
