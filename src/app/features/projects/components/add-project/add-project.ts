import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-project.html',
  styleUrls: ['./add-project.css']
})
export class AddProject {

  @Output() projectCreated = new EventEmitter<any>(); 

  project = {
    name: '',
    description: '',
    dateDeb: '',
    dateFin: '',
    status: ''
  };

  message = '';

  onSubmit(form: any) {
    if (form.valid) {
      this.projectCreated.emit({ ...this.project });  

      this.message = `Le projet « ${this.project.name} » a été créé avec succès !`;

      form.reset();
    }
  }

  onReset(form: any) {
    form.reset();
    this.message = '';
  }
}
