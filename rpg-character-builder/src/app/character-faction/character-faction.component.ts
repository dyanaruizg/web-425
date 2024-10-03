import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="title">Character Factions</h1>

    <ul class="factions-container">
      @if (characterFactions.length > 0) {
        @for(faction of characterFactions; track faction) {
          <li class="faction-card">
            <h2>{{ faction.name }}</h2>
            <p>{{ faction.description }}</p>
          </li>
        }
      } @else {
        <div class="message-container">
          <h1>{{ noFactionsMessage }}</h1>
        </div>
      }
    </ul>
  `,
  styles: `
    .factions-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;
      gap: 20px;
      padding: 0 50px;
    }

    .faction-card {
      flex: 0 0 calc(50% - 20px);
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 20px;
      margin: 10px 0;
      text-align: center;
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      list-style-type: none;
    }

    .title {
      font-size: 30px;
      text-align: center;
    }

    .message-container {
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  `
})
export class CharacterFactionComponent {
  characterFactions: any = []; // Declare array of character factions
  noFactionsMessage: string = ''; // Declare custom error message

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/character-factions').subscribe({
      next: (res) => {
        console.log(res);
        // Assign the response data to the array of character factions
        this.characterFactions = res;
      },
      error: (err) => {
        console.error('Error fetching character factions', err);
        // Assign a custom error message in the webpage for server errors
        if(err.error === 'Factions not found') {
          this.noFactionsMessage = 'No factions to show.';
        } else {
          this.noFactionsMessage = 'Error fetching character factions. Please try again later.';
        }
      }
    });
  }
}
