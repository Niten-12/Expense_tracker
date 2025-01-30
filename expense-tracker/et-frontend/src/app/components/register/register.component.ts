import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms'; // <-- Import ReactiveFormsModule here
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ], // <-- Import ReactiveFormsModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // Form data properties
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Reactive form
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, this.customEmailValidator],
      ],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  // OnSubmit method to handle form submission
  onSubmit(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      // Send data to backend
      this.registerUser(formData).subscribe(
        (response: any) => {
          console.log('User registered successfully:', response);
          // Redirect to login page after successful registration
          this.router.navigate(['/login']);
        },
        (error: any) => {
          console.log('Error registering user:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  // Custom Email Validator to handle more advanced checks
  customEmailValidator(control: any) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,6}$/;
    if (control.value && !emailRegex.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }

  // Backend Integration (Simulate API call)
  registerUser(formData: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/register', formData); // Replace with actual backend URL
  }

  // Custom method to check confirm password match
  isConfirmPasswordValid() {
    return (
      this.registerForm.get('confirmPassword')?.value ===
      this.registerForm.get('password')?.value
    );
  }
}
