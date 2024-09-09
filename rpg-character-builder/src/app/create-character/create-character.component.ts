export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="create-character-form-container">
      <form
        class="create-character-form"
        #createCharacterForm="ngForm"
        (ngSubmit)="createCharacter();">
      <h1>Complete the form below to create a new character.</h1>

        <fieldset>
          <legend><strong>My Character</strong></legend>

          <label for="name"><strong>Name</strong></label>
          <input
            type="text"
            id="name"
            required
            name="name"
            placeholder="Enter character name..."
            class="name-input"
            [(ngModel)]="nameCharacter"
            #name="ngModel">
            <div
              [hidden]="name.valid || (name.pristine && name.untouched)"
              class="alert">
              Name is required
            </div>

          <label for="gender"><strong>Gender</strong></label>
          <select
            name="gender"
            id="gender"
            [(ngModel)]="selectedCharacterGender"
            #gender="ngModel">
            @for (gender of genders; track gender) {
              <option value="{{ gender }}">{{ gender }}</option>
            }
          </select>

          <label for="class"><strong>Class</strong></label>
          <select
            name="class"
            id="class"
            [(ngModel)]="selectedCharacterClass"
            #class="ngModel">
            @for (class of classes; track class) {
              <option value="{{ class }}">{{ class }}</option>
            }
          </select>

          <input
            type="submit"
            value="Create Character"
            [disabled]="!createCharacterForm.valid"/>
        </fieldset>
      </form>

      <div class="created-characters-summary">
        <h1>Created Characters Summary</h1>

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
      </div>
    </div>
  `,
  styles: [`
    .create-character-form-container {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      padding: 0 50px;
    }

    .create-character-form {
      flex: 1;
      margin-right: 20px;
    }

    .created-characters-summary {
      flex: 1;
    }

    fieldset {
      margin-bottom: 20px;
    }

    legend {
      font-size: 18px;
    }

    label {
      text-align: left;
    }

    .alert {
      color: #a70000;
      text-align: left;
      margin-bottom: 5px;
      font-size: 12px;
      background-color: #ffbaba;
      border: 2px solid #a70000;
      border-radius: 3px;
      padding: 10px;
    }

    label, select, .name-input {
      display: block;
      margin-bottom: 5px;
    }

    .name-input, select, input[type="submit"] {
      padding: 8px;
      box-sizing: border-box;
    }

    label, input[type="submit"] {
      font-size: 15px;
    }

    select {
      width: 50%;
    }

    .name-input {
      width: 100%;
    }

    input[type="submit"] {
      float: right;
    }

    .created-characters-summary li {
      margin-bottom: 10px;
      padding: 5px;
      list-style-type: none;
    }
  `]
})
export class CreateCharacterComponent {

  // Declare the global variables
  characters: Character[]; // Array to store the created characters
  characterId: number; // Character ID
  nameCharacter: string; // Character name
  selectedCharacterGender: string; // Character gender
  selectedCharacterClass: string; // Character class

  // Variable that access the form
  @ViewChild('createCharacterForm') characterForm!: NgForm;

  // Arrays containing different options for the select menus
  genders = ["Male", "Female", "Other"];
  classes = ["Warrior", "Mage", "Rogue"];

  constructor() {
    this.characters = [];
    this.characterId = 0;
    this.nameCharacter = "";
    this.selectedCharacterGender = this.genders[0];
    this.selectedCharacterClass = this.classes[0];
  }

  // Function that create a new character. This function will only be
  // completed once all required fields are filled out.
  createCharacter() {
    // random number between 1 and 1000 for creation Id no decimal places
    this.characterId = Math.floor(Math.random() * 1000) + 1;

    // Create a character with the form data
    const characterToCreate = {
      id: this.characterId,
      name: this.nameCharacter,
      gender: this.selectedCharacterGender,
      class: this.selectedCharacterClass
    }

    // Add character to the characters array
    this.characters.push(characterToCreate);

    // Reset form values
    this.resetForm();
  }

  // Function that resets the form values
  resetForm() {
    // Reset the form attributes and set the default values
    this.characterForm.reset({
      name: "",
      gender: this.selectedCharacterGender = this.genders[0],
      class: this.selectedCharacterClass = this.classes[0]
    });
  }
}
