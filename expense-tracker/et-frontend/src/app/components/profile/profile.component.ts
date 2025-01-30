import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; // Import the UserService
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  standalone: true,
})
export class ProfileComponent implements OnInit {
  userDetails: any = {};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userDetails = this.userService['getUserDetails']();
  }

  changePassword() {
    // Logic for password change
    alert('Password change functionality will be implemented.');
  }
}
