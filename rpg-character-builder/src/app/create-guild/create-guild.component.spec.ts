import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuildComponent } from './create-guild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Unit test created by default when the component is generated.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Unit test 1
   * Should call the .valid() method to check if the form is valid
   * when empty, which is using reactive form validators to check the
   * validity of the guildForm.
   */
  it('form should be invalid when empty', () => {
    expect(component.guildForm.valid).toBeFalsy();
  });

  /**
   * Unit test 2
   * Should assign values to the guildForm controls and calls
   * the .valid() method to check the validity of the guildForm.
   */
  it('form should be valid when filled correctly', () => {
    component.guildForm.controls['guildName'].setValue('Utaru');
    component.guildForm.controls['description'].setValue(
      "It is a land of rich and fertile plains, is located within the " +
      "Forbidden West."
    );
    component.guildForm.controls['type'].setValue('Casual');
    component.guildForm.controls['acceptTerms'].setValue(
      ["I have read, understand and agree to RPG-Character-Builder's Terms."]
    );
    component.guildForm.controls['notificationPreference'].setValue('SMS');

    expect(component.guildForm.valid).toBeTruthy();
  });

  /**
   * Unit test 3
   * Should check if the createGuild() method is called when the
   * guildForm is submitted.
   */
  it('should call createGuild on form submit with valid data', () => {
    spyOn(component, 'createGuild');
    component.guildForm.controls['guildName'].setValue('Utaru');
    component.guildForm.controls['description'].setValue(
      "It is a land of rich and fertile plains, is located within the " +
      "Forbidden West."
    );
    component.guildForm.controls['type'].setValue('Casual');
    component.guildForm.controls['acceptTerms'].setValue(
      ["I have read, understand and agree to RPG-Character-Builder's Terms."]
    );
    component.guildForm.controls['notificationPreference'].setValue('SMS');
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(component.createGuild).toHaveBeenCalled();
  });
});
