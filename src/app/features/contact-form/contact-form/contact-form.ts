import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css']
})
export class ContactForm implements OnInit {

  form!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  get email() {
    return this.form.get('email');
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      console.log('Formulaire validé :', this.form.value);
      alert('Formulaire envoyé avec succès !');
      this.form.reset();
      this.submitted = false;
    }
  }
}
