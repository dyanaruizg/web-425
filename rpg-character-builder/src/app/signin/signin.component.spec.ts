import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';

class MockAuthService {
  signin(email: string, password: string) {
    return of(true);
  }
}

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SigninComponent, ReactiveFormsModule],
      providers: [{ provide: AuthService, useClass: MockAuthService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
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
   * Unit test 3
   * Should call signin method on form submission.
   */
  it('should call signin method on form submission', () => {
    // Creates a spy and use it to "spy on" the SigninComponent's authService.
    const signInSpy = spyOn(
      (component as any).authService, 'signin'
    ).and.callThrough();

    // Assign values to the sign in form controls.
    component.signinForm.controls['email'].setValue('lesleyewen@horizon.com');
    component.signinForm.controls['password'].setValue('Gaia068');
    // Call the signin() method from the SigninComponent.
    component.signin();

    // Check if the signin() method was called with the values assigned to
    // the email and password input fields.
    expect(signInSpy).toHaveBeenCalledWith(
      'lesleyewen@horizon.com', 'Gaia068'
    );
  });
});
