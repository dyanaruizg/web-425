import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, Router } from '@angular/router';
import { PlayersComponent } from './players/players.component';

describe('AppComponent (Standalone)', () => {
  beforeEach(async () => {
    const routes: Routes = [
      { path: 'players', component: PlayersComponent }
    ]

    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule.withRoutes(routes), // Include RouterTestingModule to handle routing
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * Unit test 1
   */
  it('should have correct route for Players Component', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'players');
    expect(route).toBeDefined(); // Check if the route is defined

    if (route) {
      // Check if the component is PlayersComponent
      expect(route.component).toBe(PlayersComponent);
    }
  });
});
