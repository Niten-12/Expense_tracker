import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Assuming you have an AuthService
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import for ngModel

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = ''; // For error messages

  constructor(private authService: AuthService, private router: Router) {}

  // This method will be called when the form is submitted
  onSubmit() {
    if (this.email && this.password) {
      this.onLogin();
    } else {
      this.loginError = 'Please fill in all required fields.';
    }
  }

  // Handles the login logic (authenticating the user)
  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (_response: any) => {
        // If login is successful, navigate to another page (like dashboard)
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        // Handle login failure, show an error message
        this.loginError = 'Login failed. Please check your credentials.';
      }
    );
  }
}
