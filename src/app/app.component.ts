import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive-form';

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  fName: any;
  gMail: any;
  pAssword: any;
  lName: any;
  pHone: any;
  gender: any;

  display: any;

  ngOnInit() {
    // validations

    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = !this.submitted;

    if (this.registerForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Fields All Requireds',
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }

    Swal.fire('Good job!', 'Your Form is saved ', 'success');

    this.display = !this.display;
  }
}
