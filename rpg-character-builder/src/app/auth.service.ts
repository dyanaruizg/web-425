/**
 * Define a interface to build an array of user objects for authenticating
 * authorized users.
 */
export interface User {
  empId: number;
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Define an array of user objects
  private users: User[];
  // Define a variable to keep track of whether someone is signed into the
  // application or not.
  private authState = new BehaviorSubject(<boolean>false);

  /**
   * Configure the constructor to access the CookieService and Router module
   * functionality within this component.
   */
  constructor(private cookieService: CookieService, private router: Router) {
    // Set some valid users in the user object array.
    this.users = [
      {
        empId: 1001,
        email: 'aloynora@horizon.com',
        password: 'Aloy123'
      },
      {
        empId: 1002,
        email: 'sylensboogeyman@horizon.com',
        password: 'Mobile3'
      },
      {
        empId: 1003,
        email: 'varl_warchief@horizon.com',
        password: 'Brave26'
      },
      {
        empId: 1004,
        email: 'erendvanguardsman@horizon.com',
        password: 'Oseram3021'
      },
      {
        empId: 1005,
        email: 'elisabethsobeck@horizon.com',
        password: 'Scientist2020'
      }
    ];
  }

  /**
   * Method that returns the authState BehaviorSubject as an observable.
   * @returns authState observable.
   */
  getAuthState() {
    return this.authState.asObservable();
  }

  /**
   * Method used to sign a user into the Angular application.
   * @param email user email.
   * @param password user password.
   * @returns a boolean value for successful or unsuccessful sign in.
   */
  signin(email: string, password: string) {
    // Use JavaScript’s built-in find() function to compare the formal
    // parameters against the users array.
    const user = this.users.find(
      user => user.email === email && user.password === password
    );

    // Check if a match is found it means the user is "authenticated"
    // and should be granted access to the application.
    if (user) {
      // Use the npm package "ngx-cookie-service" to create and assign
      // a cookie to the user’s browser.
      this.cookieService.set('session_user', email, 1);
      // Set the authState to true
      this.authState.next(true);
      return true;
    } else {
      // Set the authState to false
      this.authState.next(false);
      return false;
    }
  }

  /**
   * Method used to mimic the behavior of signing a user out of the
   * application.
   */
  signout() {
    // Call the deleteAll() method to delete the browser's cookies.
    this.cookieService.deleteAll();
    // Set the authState to false.
    this.authState.next(false);
    // Redirect users to the /signin route.
    this.router.navigate(['/signin']).then(() => {});
  }
}
