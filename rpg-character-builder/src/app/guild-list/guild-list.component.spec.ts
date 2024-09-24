import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildListComponent } from './guild-list.component';
import { CommonModule } from '@angular/common';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;

    const mockGuild: any = [
      {
        guildName: "Utaru",
        description:
          "It is a land of rich and fertile plains, is located within the " +
          "Forbidden West.",
        type: "Casual",
        acceptTerms:
          ["I have read, understand and agree to RPG-Character-Builder's Terms."],
        notificationPreference: "SMS"
      }
    ];

    component.preexistingGuild = mockGuild;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 3: guilds in the newly created component are displaying correctly.
  it('should display the guilds correctly', () => {
    // Define a mock guild object literal.
    const mockGuild: any = [
      {
        guildName: "Carja",
        description:
          "It has a huge population and are more economically and militarily " +
          "advanced compared to the other tribes.",
        type: "Competitive",
        acceptTerms:
          ["I have read, understand and agree to RPG-Character-Builder's Terms."],
        notificationPreference: "In-App"
      }
    ];

    component.preexistingGuild = mockGuild; // Add the guild to the list.
    fixture.detectChanges();

    // Check if the HTML displays the correct guild.
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Carja');
    expect(compiled.querySelector('h3.description').textContent)
    .toContain('Description:');
    expect(compiled.querySelector('p.description').textContent).toContain(
      "It has a huge population and are more economically and militarily " +
      "advanced compared to the other tribes."
    );
    expect(compiled.querySelector('h3.type').textContent)
    .toContain('Type:');
    expect(compiled.querySelector('p.type').textContent)
    .toContain('Competitive');
    expect(compiled.querySelector('h3.acceptTerms').textContent)
    .toContain('Accept Terms:');
    expect(compiled.querySelector('li').textContent).toContain(
      "I have read, understand and agree to RPG-Character-Builder's Terms."
    );
    expect(compiled.querySelector('h3.notificationPreference').textContent)
    .toContain('Notification Preference:');
    expect(compiled.querySelector('p.notificationPreference').textContent)
    .toContain('In-App');
  });

  // Test 4: should display a message for an empty guild list.
  it('should display a message for an empty guild list', () => {
    component.preexistingGuild = []; // Define an empty guild list.
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    // Check if a message is displayed in the HTML for empty guilds.
    expect(compiled.querySelector('p').textContent).toContain(
      'No guilds have been created yet.'
    );
  });
});
