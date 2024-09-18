export interface PlayerCharacter {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
  imgPath: string;
  imgAlt: string;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1 class="title">Players</h1>
      <h3 class="description">
        Explore our list of pre-configured characters, each with the
        characteristics that make them stand out.
      </h3>

      <ul class="players-container">
        @for (character of players; track character) {
          <li class="player-character">
            <img src="{{ character.imgPath }}" alt="{{ character.imgAlt }}">
            <div class="card">
              <h2 class="name">{{ character.name }}</h2>
              <p><strong>Gender: </strong>{{ character.gender }}</p>
              <p><strong>Class: </strong>{{ character.class }}</p>
              <p><strong>Faction: </strong>{{ character.faction }}</p>
              <p><strong>Starting Location: </strong>{{ character.startingLocation }}</p>
              <p><strong>Fun Fact: </strong>{{ character.funFact }}</p>
            </div>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .title {
      font-size: 30px;
      text-align: center;
    }

    .description {
      font-size: 25px;
      text-align: center;
    }

    .players-container {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 20px;
      text-align: center;
    }

    .player-character img {
      max-width: 100%;
    }

    .player-character {
      flex: 0 1 calc(33.33% - 20px);
      margin: 10px;
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .name {
      font-size: 25px;
    }

    .card {
      padding: 0 20px 20px 20px;
    }
  `]
})
export class PlayersComponent {
  players: PlayerCharacter[];

  constructor() {
    this.players = [
      {
        "name": "Aloy",
        "gender": "Female",
        "class": "Warrior",
        "faction": "Machine hunter",
        "startingLocation": "North of Mother's Rise",
        "funFact": "Aloy is a clone who's destined to save the world.",
        "imgPath": "/assets/Aloy2.jpg",
        "imgAlt": "Aloy"
      },
      {
        "name": "Sylens",
        "gender": "Male",
        "class": "Rogue",
        "faction": "Lone Wanderer",
        "startingLocation": "Mobile",
        "funFact": "For all of his life, he has been obsessed with uncovering the fate of the Old Ones.",
        "imgPath": "/assets/Sylens2.jpg",
        "imgAlt": "Sylens"
      },
      {
        "name": "Varl",
        "gender": "Male",
        "class": "Warrior",
        "faction": "Nora Brave",
        "startingLocation": "Sacred Lands",
        "funFact": "While resolute and morally upright, Varl's greatest strength is his emotional insight.",
        "imgPath": "/assets/Varl.jpeg",
        "imgAlt": "Varl"
      },
      {
        "name": "Erend",
        "gender": "Male",
        "class": "Warrior",
        "faction": "Captain of the Vanguard",
        "startingLocation": "Carja Sundom",
        "funFact": "Erend helped defend the Carja capital against the attack by the Shadow Carja cult.",
        "imgPath": "/assets/Erend2.jpg",
        "imgAlt": "Erend"
      },
      {
        "name": "Petra",
        "gender": "Female",
        "class": "Mage",
        "faction": "Leader of Chainscrape",
        "startingLocation": "Eastern Sundom",
        "funFact": "Petra abandoned the claim in her youth.",
        "imgPath": "/assets/Petra.jpg",
        "imgAlt": "Petra"
      },
      {
        "name": "Lakhir",
        "gender": "Male",
        "class": "Warrior",
        "faction": "Guard",
        "startingLocation": "Daytower",
        "funFact": "Part of his garrison has disappeared in Nora's lands.",
        "imgPath": "/assets/Lakhir.jpg",
        "imgAlt": "Lakhir"
      },
      {
        "name": "Jezza",
        "gender": "Female",
        "class": "Rogue",
        "faction": "High Matriarch",
        "startingLocation": "South of Mother's Rise",
        "funFact": "Jezza is one of the three ruling High Matriarchs of the Nora tribe.",
        "imgPath": "/assets/Jezza.jpg",
        "imgAlt": "Jezza"
      },
      {
        "name": "Avad",
        "gender": "Male",
        "class": "Mage",
        "faction": "Sun-King Avad",
        "startingLocation": "Palace of the Sun",
        "funFact": "Avad desires a working relationship with other tribes based on mutual respect.",
        "imgPath": "/assets/Avad.jpg",
        "imgAlt": "Avad"
      },
      {
        "name": "Talanah",
        "gender": "Female",
        "class": "Warrior",
        "faction": "Hunter",
        "startingLocation": "Sunhawk",
        "funFact": "She is a Hawk and proudly descended from an illustrious line of Carja noble hunters.",
        "imgPath": "/assets/Talanah.jpg",
        "imgAlt": "Talanah"
      },
      {
        "name": "Ersa",
        "gender": "Female",
        "class": "Warrior",
        "faction": "Vanguard",
        "startingLocation": "Carja Sundom",
        "funFact": "Ersa was forced to grow up quickly in response to the poor leadership of her father.",
        "imgPath": "/assets/Ersa.jpg",
        "imgAlt": "Ersa"
      }
    ];
  }
}
