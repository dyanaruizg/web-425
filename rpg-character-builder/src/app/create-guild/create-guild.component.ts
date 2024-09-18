import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule
} from '@angular/forms';
import { NgAlertBoxComponent } from "ng-alert-box-popup";

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="guild-form-container">
      <form [formGroup]="guildForm" class="guild-form"
      (ngSubmit)="createGuild(); guildForm.reset();">

        <h1>My Guild</h1>
        <p>Complete the form below to create a new guild.</p>

        <label>Guild Name</label>
        <input formControlName="guildName" type="text" class="name-input">
        @if (guildForm.controls['guildName'].touched &&
        guildForm.controls['guildName'].hasError('required')) {
          <div class="alert">Guild name is required.</div>
        }

        <label>Description</label>
        <textarea rows="10" formControlName="description"></textarea>
        @if (guildForm.controls['description'].touched &&
        guildForm.controls['description'].hasError('required')) {
          <div class="alert">Description is required.</div>
        }

        <label>Type</label>
        <select formControlName="type">
          @for(option of typeOptions; track option) {
            <option [value]="option">{{ option }}</option>
          }
        </select>
        @if (guildForm.controls['type'].touched &&
        guildForm.controls['type'].hasError('required')) {
          <div class="alert">Type is required.</div>
        }

        <label>Accept Terms</label>
        <div formArrayName="acceptTerms">
          @for(term of acceptTermsArray.controls; track term; let i = $index) {
            <input type="checkbox" [formControlName]="i">
            {{ acceptTerms[i] }} <br />
          }
        </div>
        @if (guildForm.controls['acceptTerms'].value == 'false' &&
        guildForm.controls['acceptTerms'].dirty) {
          <div class="alert">You must to accept the terms to submit the form.</div>
        }

        <label>Notification Preference</label>
        @for(notification of notificationPreference; track notification) {
          <input type="radio" [value]="notification" formControlName="notificationPreference">
          {{ notification }} <br />
        }

        <input type="submit" [disabled]="!guildForm.valid" value="Create Guild">
      </form>

      <div class="guild">
        <h1>Created Guilds Summary</h1>
        <div class="guild-container">
          @for(guild of preexistingGuild; track guild) {
            <div class="guild-card">
              <h2>{{ guild.guildName }}</h2>
              <h3><strong>Description:</strong></h3>
              <p>{{ guild.description }}</p>
              <h3><strong>Type:</strong></h3>
              <p>{{ guild.type }}</p>
              <h3><strong>Accept Terms:</strong></h3>
              <ul class="terms-list">
                @for(term of guild.acceptTerms; track term) {
                  <li>{{ term }}</li>
                }
              </ul>
              <h3><strong>Notification Preference:</strong></h3>
              <p>{{ guild.notificationPreference }}</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .guild-form-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      background-color: #ededed;
    }

    .guild-form {
      margin: 20px;
      padding: 50px;
      width: 80%;
      background-color: #fff;
      box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .guild {
      margin: 20px;
      padding: 50px;
      width: 80%;
    }

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

    .name-input {
      width: 100%;
      margin-bottom: 8px;
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

    .name-input, select, textarea, input[type="submit"] {
      padding: 8px;
      box-sizing: border-box;
    }

    h1 {
      margin: 0 auto;
    }

    h1, p {
      text-align: center;
    }

    label {
      display: block;
      margin-bottom: 5px;
      text-align: left;
    }

    label:first-of-type {
      margin-top: 0;
    }

    label:not(:first-of-type) {
      margin-top: 10px;
    }

    select {
      width: 30%;
      display: block;
      margin-bottom: 5px;
    }

    textarea {
      width: 100%;
      margin-bottom: 5px;
    }

    input[type="checkbox"], input[type="radio"] {
      box-sizing: border-box;
      margin-bottom: 10px;
    }

    input[type="submit"] {
      float: right;
      background-color: #1F6DAD;
      margin-top: 20px;
      color: white;
      padding: 14px 20px;
      border: none;
      cursor: pointer;
      text-align: center;
      font-size: 15px;
    }

    input[type="submit"]:disabled {
      background-color: #175282;
    }
  `
})
export class CreateGuildComponent {
  // Defines an array of string value to populate the select menu.
  typeOptions: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  // Define an array of string values to populate the checkboxes.
  acceptTerms: string[] = [
    "I have read, understand and agree to RPG-Character-Builder's Terms."
  ];
  // Define an array of string values to populate the radio buttons.
  notificationPreference: string[] = ['Email', 'SMS', 'In-App'];
  preexistingGuild: any;

  // Build a guild form with 5 controls and include data validation
  // through the Validators module.
  guildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.compose([Validators.required])],
    description: [null, Validators.compose([Validators.required])],
    type: [null, Validators.compose([Validators.required])],
    acceptTerms: this.fb.array(
      this.acceptTerms.map(() => false),
      Validators.compose([Validators.required])
    ),
    notificationPreference: [null, Validators.compose([Validators.required])]
  })

  constructor(private fb: FormBuilder, private alerts: NgAlertBoxComponent) {
    this.preexistingGuild = [
      {
        guildName: "Nora",
        description: "It is an isolationist, matriarchal hunter-gatherer society " +
        "situated in what is known as the Sacred Land.",
        type: "Competitive",
        acceptTerms: ["I have read, understand and agree to RPG-Character-Builder's Terms."],
        notificationPreference: "Email"
      },
      {
        guildName: "Oseram",
        description: "It is know for its excellent metalworkers and craftsmen, " +
        "and as such, their steel and powerful weaponry.",
        type: "Casual",
        acceptTerms: ["I have read, understand and agree to RPG-Character-Builder's Terms."],
        notificationPreference: "SMS"
      },
      {
        guildName: "Tenakth",
        description: "It is the westernmost tribe on the North American continent, " +
        "inhabiting and controlling the Clan Lands located within the Forbidden West.",
        type: "Social",
        acceptTerms: ["I have read, understand and agree to RPG-Character-Builder's Terms."],
        notificationPreference: "In-App"
      },
      {
        guildName: "Quen",
        description: "Hailing from a land across the Pacific Ocean, the Quen are an " +
        "advanced and powerful empire formed around the discovery of the Focus.",
        type: "Educational",
        acceptTerms: ["I have read, understand and agree to RPG-Character-Builder's Terms."],
        notificationPreference: "Email"
      }
    ]
  }

  /**
   * Method that is a used to return the accept terms array.
   */
  get acceptTermsArray() {
    return this.guildForm.get('acceptTerms') as FormArray;
  }

  /**
   * Method that is used for processing forms submissions.
   */
  createGuild() {
    // Get the boolean values for each checkbox from the FormArray
    const selectedTermsValues = this.acceptTermsArray.value;

    // Map and filter the terms based on the boolean values
    const selectedTerms = this.acceptTerms
      .map((term, index) => selectedTermsValues[index] ? term : null)
      .filter(term => term !== null);

    const newGuild = {
      guildName: this.guildForm.value.guildName,
      description: this.guildForm.value.description,
      type: this.guildForm.value.type,
      acceptTerms: selectedTerms,
      notificationPreference: this.guildForm.value.notificationPreference
    };

    // Add the object to the preexistingGuild array.
    this.preexistingGuild.push(newGuild);
    this.alerts.dialog('S','Guild submitted successfully!');
  }
}
