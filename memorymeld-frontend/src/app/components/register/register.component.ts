import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    this.auth.register(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/login']); // After register, go to login
      },
      error: (err) => {
        this.error = err.error?.error || 'Registration failed';
      }
    });
  }
}
