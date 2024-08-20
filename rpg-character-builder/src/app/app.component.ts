import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

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
        <button class="menu-right"><a routerLink="/signin">Sign In</a></button>
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
  title = 'rpg-character-builder';
}
