import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Character } from '../create-character/create-character.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>List of Created Characters</h1>

    @if (characters.length > 0) {
      <ul>
        @for (character of characters; track character) {
          <li>
            <strong>{{ character.name }}</strong>
            <br />
            Gender: {{ character.gender }}
            <br />
            Class: {{ character.class }}
          </li>
        }
      </ul>
    } @else {
      <p>No characters have been created yet.</p>
    }
  `,
  styles: `
    li {
      margin-bottom: 10px;
      padding: 5px;
      list-style-type: none;
    }
  `
})
export class CharacterListComponent {
  @Input() characters!: Character[];
}
