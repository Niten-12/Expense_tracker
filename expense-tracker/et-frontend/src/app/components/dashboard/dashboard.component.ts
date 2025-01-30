import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
})
export class DashboardComponent {
  constructor(private router: Router, private AuthService: AuthService) {}

  logout() {
    this.AuthService.logout();
    this.router.navigate(['/login']);
  }
}
