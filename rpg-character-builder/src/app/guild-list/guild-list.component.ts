import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>List of Created Guilds</h1>

    <div class="guild-container">
      @if (preexistingGuild.length > 0) {
        @for(guild of preexistingGuild; track guild) {
          <div class="guild-card">
            <h2>{{ guild.guildName }}</h2>
            <h3 class="description"><strong>Description:</strong></h3>
            <p class="description">{{ guild.description }}</p>
            <h3 class="type"><strong>Type:</strong></h3>
            <p class="type">{{ guild.type }}</p>
            <h3 class="acceptTerms"><strong>Accept Terms:</strong></h3>
            <ul class="terms-list">
              @for(term of guild.acceptTerms; track term) {
                <li>{{ term }}</li>
              }
            </ul>
            <h3 class="notificationPreference">
              <strong>Notification Preference:</strong>
            </h3>
            <p class="notificationPreference">
              {{ guild.notificationPreference }}
            </p>
          </div>
        }
      } @else {
        <p>No guilds have been created yet.</p>
      }
    </div>
  `,
  styles: `
    .guild-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;
      gap: 20px;
    }

    .guild-card {
      flex: 0 0 calc(50% - 20px);
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 20px;
      margin: 10px 0;
      text-align: center;
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .terms-list {
      list-style-type: none;
      padding: 0;
    }

    .terms-list li {
      padding: 5px 0;
    }

    h1, p {
      text-align: center;
    }
  `
})
export class GuildListComponent {
  @Input() preexistingGuild!: any[];
}
