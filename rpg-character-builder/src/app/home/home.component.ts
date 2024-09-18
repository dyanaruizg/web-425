import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="home-container">
      <img class="banner" src="/assets/Horizon.png"
        alt="participate, customize characters, and narrate interactively">
      <h1 class="slogan">Quick and easy RPG character builder!</h1>
      <h3 class="description">
        The RPG Character Builder is a quick and easy application that allows users to create a
        standard character sheet in seconds for role-playing games. Designed for players who do
        not prefer specific game rules, this application is perfect for those who want to start
        a game by making up the rules as they go.
      </h3>
      <h3 class="description">
        With the RPG Character Builder, users can enter personal data such as weight, height,
        gender, family, and age for their character. Additionally, they can define the character's
        main characteristics, including strength, agility, skill, intelligence, and charisma. The
        application also offers the option to specify specific skills, such as swordplay or
        horsemanship.
      </h3>

      <hr>

      <h1 class="section-title">Players have created</h1>

      <div class="section-container">
        <div class="card">
          <img src="/assets/Aloy.jpg" alt="Aloy">
          <h2>Aloy</h2>
          <p>
            She is a machine hunter created to stop HADES, a rogue AI bent on reactivating the
            Faro Plague to wipe out life. Aloy saved life on Earth and the humans of the new world
            that Zero Dawn created. In doing so, she unraveled the mysteries of why the world
            became as it is and learned the true nature of her origins.
          </p>
          <button>VIEW</button>
        </div>
        <div class="card">
          <img src="/assets/Erend.jpg" alt="Erend">
          <h2>Erend</h2>
          <p>
            He is a member and later captain of the Carja Sun-King Avad’s Vanguard. He assisted
            Aloy as she uncovered the truth about the murder of his sister and predecessor,
            Vanguard Captain Ersa. Later, he stood with Aloy when she faced the cult’s master,
            the rogue artificial intelligence HADES.
          </p>
          <button>VIEW</button>
        </div>
        <div class="card">
          <img src="/assets/Sylens.jpg" alt="Sylens">
          <h2>Sylens</h2>
          <p>
            He is a wandering traveler, archaeologist, researcher, and the founder of the Eclipse
            and the Sons of Prometheus. He has a deep fascination with the history and technology
            of the Old Ones and allies, with Aloy to discover the truth behind the machines and
            the fate of the Old Ones.
          </p>
          <button>VIEW</button>
        </div>
      </div>
    </div>
  `,
  styles: `
    .home-container {
      text-align: center;
      margin-bottom: 50px;
    }

    .slogan {
      font-size: 40px;
    }

    .description {
      font-size: 25px;
      padding: 0 50px;
    }

    .banner {
      width: 100%;
    }

    .section-title {
      font-size: 30px;
    }

    .section-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 20px;
    }

    .card img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }

    .card p {
      margin-top: 10px;
    }

    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 300px;
      margin: auto;
      text-align: center;
      background-color: #fff;
    }

    .card p {
      padding: 5px;
    }

    .card button {
      border: none;
      outline: 0;
      padding: 12px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
    }
  `
})
export class HomeComponent {

}
