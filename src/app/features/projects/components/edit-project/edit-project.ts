import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-project.html',
  styleUrls: ['./edit-project.css']
})
export class EditProject {

  @Input() project: any = null;
  @Output() cancelEdit = new EventEmitter<void>();
  @Output() saveEdit = new EventEmitter<any>();

  onSave(form: any) {
    if (form.valid) {
      this.saveEdit.emit(this.project);
    }
  }

  onCancel() {
    this.cancelEdit.emit();
  }
}
