// app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../app/components/services/auth.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <div>
      <h1>Angular-Spring Boot Connection</h1>
      <p>{{ message }}</p>
    </div>
  `,
})
export class AppComponent implements OnInit {
  title = 'et-frontend';
  message = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getData().subscribe({
      next: (response: any) => {
        this.message = response; // Bind backend response to the template
      },
      error: (err) => {
        console.error('Error connecting to backend:', err);
      },
    });
  }
}
