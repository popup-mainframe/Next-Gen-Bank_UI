import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataserviceService } from '../../services/dataservice.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  showLoginForm: boolean = false;
  errorMessage: string;

 openLoginForm() {
    this.showLoginForm = true;
  }

  closeLoginForm() {
    this.showLoginForm = false;
  }
 
loginForm: FormGroup; // Define loginForm as a FormGroup

constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private dataserviceService: DataserviceService, private cookieService: CookieService) {}

ngOnInit() {
    // Initialize the loginForm with form controls for username and password
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Define username form control with required validator
      password: ['', Validators.required]  // Define password form control with required validator
    });
  }
    
 get username() {
  return this.loginForm.controls['username'];
 }
 get password() {
  return this.loginForm.controls['password'];
 }

// login method 
login(): void {
  if (this.loginForm.invalid) {
    return;
  }

  const username = this.loginForm.value.username;
  const password = this.loginForm.value.password;

  this.authService.login(username, password).subscribe({
    next: (data) => {
      this.cookieService.set("token", data.token);
      const account = {
        name: 'John',
        accountType: 'Current Account', // Hardcoded account type
        accountNumber: data.account,
        balance: data.balance.amount
      };
      // Set account details in cookies
      this.cookieService.set('account', JSON.stringify(account));
        
      // After setting data in cookies, navigate to dashboard
      this.router.navigate(['/dashboard']);
    },
    error: (error) => {
      console.error('Login error:', error);
      // Handle error
    }
  });

}
}