import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service'
import { NgAlertBoxComponent } from "ng-alert-box-popup";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="signin-form-container">
      <form [formGroup]="signinForm" (ngSubmit)="signin();" class="signin-form">
        <h1>Sign In</h1>
        <p>Complete the form below to sign in.</p>

        <label for="email">Email</label>
        <input formControlName="email" type="email" id="email" name="email">
        @if (signinForm.controls['email'].touched &&
        signinForm.controls['email'].hasError('required')) {
          <div class="alert">Email is required.</div>
        }
        @if (signinForm.controls['email'].touched &&
        signinForm.controls['email'].hasError('email')) {
          <div class="alert">Invalid email address.</div>
        }

        <label for="password">Password</label>
        <input formControlName="password" id="password" type="password">
        @if (signinForm.controls['password'].touched &&
        signinForm.controls['password'].hasError('required')) {
          <div class="alert">Password is required.</div>
        }
        @if (signinForm.controls['password'].touched &&
        signinForm.controls['password'].hasError('pattern')) {
          <div class="alert">
            Password must be at least 8 characters long and
            contain at least one uppercase letter and one number.
          </div>
        }

        <input type="submit" [disabled]="!signinForm.valid" value="Sign In">
      </form>
    </div>
  `,
  styles: `
    .signin-form-container {
      display: inline-block;
      flex-wrap: wrap;
      list-style-type: none;
    }

    .signin-form {
      width: 300px;
      padding: 50px 100px;
      margin: 50px;
      box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
    }

    p {
      margin-bottom: 30px;
    }

    label, input {
      display: block;
      margin-bottom: 5px;
      text-align: left;
    }

    input, input[type="submit"] {
      padding: 8px;
      box-sizing: border-box;
    }

    input[type="email"], input[type="password"] {
      width: 100%;
    }

    input[type="submit"] {
      background-color: #1F6DAD;
      color: white;
      padding: 14px 20px;
      margin: 30px 0;
      border: none;
      cursor: pointer;
      width: 100%;
      text-align: center;
      font-size: 15px;
      border-radius: 25px;
    }

    .alert {
      color: #a70000;
      text-align: justify;
      margin-bottom: 5px;
      font-size: 12px;
      background-color: #ffbaba;
      border: 2px solid #a70000;
      border-radius: 3px;
      padding: 10px;
    }

    ::backdrop {
      background-image: linear-gradient(
        45deg,
        magenta,
        rebeccapurple,
        dodgerblue,
        green
      );
      opacity: 0.75;
    }
  `
})
export class SigninComponent {
  // Use Angular’s reactive form to build a form with two controls: email and
  // password. Include data validation through the Validators module.
  signinForm: FormGroup = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, Validators.compose(
      [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/)
      ]
    )]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private alerts: NgAlertBoxComponent) {
  }

  /**
   * Method for processing form submissions.
   */
  signin() {
    // Retrieve the values from a reactive form.
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;

    // Check if the user is authenticated with the values ​​obtained from the form.
    if (this.authService.signin(email, password)) {
      // Check the URL for a parameter value named "returnUrl".
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      // Redirect users to the value.
      this.router.navigate([returnUrl]);
    } else {
      // Throw an unauthenticated user error message.
      this.alerts.dialog('E','Invalid email or password. Please try again.');
    }
  }

}
