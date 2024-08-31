import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Created by default when the component is generated
   * Unit test 2
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Unit test 3
   */
  it('should correctly display a list of characters', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const playercharacters = compiled.querySelectorAll('.player-character'); // Get all the players characters
    // Check if the number of players characters is equal to the number of characters in the players array
    expect(playercharacters.length).toEqual(component.players.length);
  });
});
