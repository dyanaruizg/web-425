import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  const url = 'http://localhost:3000/api/character-factions';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Unit test created by default when the component is generated.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 1: should handle errors when data is not found.
  it('should handle errors when data is not found', () => {
    const expectedMessage = 'No factions to show.';

    // If no requests or multiple requests matched that URL 'expectOne()' would throw.
    const req = httpTestingController.expectOne(url);

    // Respond with mock error
    req.flush('Factions not found', { status: 404, statusText: 'Not Found' });

    // Check if the message in the component is equal to the expected message
    expect(component.noFactionsMessage).toEqual(expectedMessage);
  });

  // Test 2: should correctly fetch a list of character factions.
  it('should correctly fetch a list of character factions', () => {
    const mockCharacterFactions = [
      {
        name: "The Arcane Order",
        description: "The Arcane Order is a faction of powerful mages. They seek knowledge " +
          "and wisdom, and their magic is a tool to understand the mysteries of the universe. " +
          "They are respected and feared for their magical prowess."
      },
      {
        name: "The Silent Knives",
        description: "The Silent Knives is a faction of skilled rogues. They value stealth, " +
          "cunning, and precision. Their members are masters of the shadows, using their " +
          "skills for espionage and assassination."
      }
    ];

    // Match the request's URL.
    const req = httpTestingController.expectOne(url);

    // Respond with mock data
    req.flush(mockCharacterFactions);

    // Check if the array of the character factions is equal to the mock faction.
    expect(component.characterFactions).toEqual(mockCharacterFactions);
  });

  // Test 3: should update the characterFactions div when character factions are found.
  it('should update the characterFactions div when character factions are found', () => {
    const mockCharacterFactions = [
      {
        name: "The Arcane Order",
        description: "The Arcane Order is a faction of powerful mages. They seek knowledge " +
          "and wisdom, and their magic is a tool to understand the mysteries of the universe. " +
          "They are respected and feared for their magical prowess."
      },
      {
        name: "The Silent Knives",
        description: "The Silent Knives is a faction of skilled rogues. They value stealth, " +
          "cunning, and precision. Their members are masters of the shadows, using their " +
          "skills for espionage and assassination."
      }
    ];

    // Match the request's URL.
    const req = httpTestingController.expectOne(url);

    // Respond with mock data
    req.flush(mockCharacterFactions);

    // Check if the array of the character factions is equal to the mock faction.
    expect(component.characterFactions).toEqual(mockCharacterFactions);

    fixture.detectChanges(); // Perform data binding

    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const characterFaction = compiled.querySelectorAll('.faction-card'); // Get all the character factions

    // Check if the number of character factions is equal to the number in the character factions array
    expect(characterFaction.length).toEqual(component.characterFactions.length);
  });
});
