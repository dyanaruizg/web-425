import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="page-title">
        <div class="title"><a routerLink="/">RPG Character Builder</a></div>
      </header>

      <nav class="navbar">
        <ul class="menu-left">
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/players">Players</a></li>
          <li><a routerLink="/create-character">Create Character</a></li>
          <li><a routerLink="/create-guild">Create Guild</a></li>
          <li><a routerLink="/character-faction">Character Faction</a></li>
        </ul>

        <div class="menu-right">
          @if (email) {
            <p>Welcome <strong>{{ email }}</strong></p>
            <button (click)="signout()">Sign Out</button>
          } @else {
            <button><a routerLink="/signin">Sign In</a></button>
          }
        </div>
      </nav>

      <main class="main-content">
        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> |
          <a routerLink="/players">Players</a> |
          <a routerLink="/create-character">Create Character</a> |
          <a routerLink="/create-guild">Create Guild</a> |
          <a routerLink="/character-faction">Character Faction</a>
        </nav>
        <p class="copyright">&copy; 2024 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [
    `
    `
  ]
})
export class AppComponent {
  email?: string;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {
  }

  ngOnInit() {
    // Subscribe to the getAuthState() method in the AuthService to
    // determine if the user is signed in or not.
    this.authService.getAuthState().subscribe((isAuth) => {
      // Check if the user is authenticated
      if (isAuth) {
        // Get the user's email from browser cookies.
        this.email = this.cookieService.get('session_user');
      }
    });
  }

  /**
   * Method used to call the signout() method from the AuthService to
   * sign users out of the application.
   */
  signout() {
    this.email = "";
    this.authService.signout();
  }
}
