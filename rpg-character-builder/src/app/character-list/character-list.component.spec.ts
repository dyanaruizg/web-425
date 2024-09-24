import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import { Character } from '../create-character/create-character.component';
import { CommonModule } from '@angular/common';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;

    const mockCharacter: Character[] = [
      {
        id: 1,
        name: "Batman",
        gender: "Male",
        class: "Warrior"
      }
    ];

    component.characters = mockCharacter;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 1: characters in the newly created component are displaying correctly.
  it('should display the characters correctly', () => {
    // Define a mock character object literal.
    const mockCharacter: Character[] = [
      {
        id: 2,
        name: "Wonder Woman",
        gender: "Female",
        class: "Rogue"
      }
    ];

    component.characters = mockCharacter; // Add the character to the list.
    fixture.detectChanges();

    // Check if the HTML displays the correct character.
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('Wonder Woman');
    expect(compiled.querySelector('li').textContent).toContain('Gender: Female');
    expect(compiled.querySelector('li').textContent).toContain('Class: Rogue');
  });

  // Test 2: should display a message for an empty character list.
  it('should display a message for an empty character list', () => {
    component.characters = []; // Define an empty character list.
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    // Check if a message is displayed in the HTML for empty characters.
    expect(compiled.querySelector('p').textContent).toContain('No characters have been created yet.');
  });
});
