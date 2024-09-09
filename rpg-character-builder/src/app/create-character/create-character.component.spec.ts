import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 1: should generate a random character ID between 1 and 1000 with no decimal places.
  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    component.createCharacter(); // This will trigger the generation of a new order ID
    expect(component.characterId).toBeGreaterThan(0);
    expect(component.characterId).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(component.characterId)).toBe(true);
  });

  // Test 2: should add a character with correct customization.
  it('should add a character with correct customization', () => {
    component.nameCharacter = "Batman";
    component.selectedCharacterGender = "Male";
    component.selectedCharacterClass = "Warrior";
    component.createCharacter();
    const createCharacter = component.characters[0];

    expect(createCharacter.name).toBe("Batman");
    expect(createCharacter.gender).toBe("Male");
    expect(createCharacter.class).toBe("Warrior");
  });

  // Test 3: should reset all form fields to their default values after resetForm is
  // called.
  it('should reset all form fields to their default values after resetForm is called',
  () => {
    component.nameCharacter = "Wonder Woman";
    component.selectedCharacterGender = "Female";
    component.selectedCharacterClass = "Rogue";
    component.resetForm();

    expect(component.nameCharacter).toBe("");
    expect(component.selectedCharacterGender).toBe("Male");
    expect(component.selectedCharacterClass).toBe("Warrior");
  });
});
