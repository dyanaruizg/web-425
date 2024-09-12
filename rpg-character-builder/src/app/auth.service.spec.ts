import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

describe('AuthService', () => {
  // Import the service to authenticate users.
  let service: AuthService;
  // Import the angular service to read, set and delete browser cookies.
  let cookieServiceSpy: jasmine.SpyObj<CookieService>;

  beforeEach(() => {
    // Create the mock method for browser cookies.
    const spy = jasmine.createSpyObj('CookieService', ['set', 'deleteAll']);

    TestBed.configureTestingModule({
      // Provide the service to test and its dependency
      providers: [
        AuthService, { provide: CookieService, useValue: spy }
      ]
    });

    // Inject the service to test and its dependency
    service = TestBed.inject(AuthService);
    cookieServiceSpy = TestBed.inject(CookieService) as
    jasmine.SpyObj<CookieService>;
  });

  /**
   * Unit test created by default when the service is generated.
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Unit test 1
   * Should set cookie and authState to true on successful sign in.
   */
  it('should set cookie and authState to true on successful sign in', () => {
    // Call the signin() method from the AuthService to test the functionality
    // of our sign in service with valid credentials.
    const result = service.signin('elisabethsobeck@horizon.com', 'Scientist2020');

    // Result represents the response from the signin method and toBeTrue() is
    // called to test the 'truthy' of the result variable.
    expect(result).toBeTrue();
    // Call to the getAuthState() method is subscribed to and tested .toBeTrue().
    expect(service.getAuthState().subscribe(state => expect(state).toBeTrue()));
    // Call to the spy cookie service is tracked to return the number of times
    // the spy was called and .toBe() is tested with a value of 1 to ensure it
    // was called once.
    expect(cookieServiceSpy.set.calls.count()).toBe(1);
  });

  /**
   * Unit test 2
   * Should not set cookie and authState to true on unsuccessful sign in.
   */
  it('should not set cookie and authState to true on unsuccessful sign in', () => {
    // Call the signin() method from the AuthService to test the functionality
    // of our sign in service with invalid credentials.
    const result = service.signin('wrongemail@horizon.com', 'wrongpassword');

    // Result represents the response from the signin method and toBeFalse() is
    // called to test the 'falsy' of the result variable.
    expect(result).toBeFalse();
    // Call to the getAuthState() method is subscribed to and tested .toBeFalse().
    expect(service.getAuthState().subscribe(state => expect(state).toBeFalse()));
    // Call to the spy cookie service is tracked to return the number of times
    // the spy was called and .toBe() is tested with a value of 0 to ensure it
    // has not been called.
    expect(cookieServiceSpy.set.calls.count()).toBe(0);
  });
});
