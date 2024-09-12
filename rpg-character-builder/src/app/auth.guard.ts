import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  // Use Angular’s inject function to give us access to the "ngx-cookie-service".
  const cookieService = inject(CookieService);

  // Check the user's browser for a cookie named "session_user". If it is present,
  // it means the user has been authenticated and should be given access to the
  // requested route.
  if (cookieService.get('session_user')) {
    return true;
  } else {
    // Use Angular’s inject function to give us access to the router.
    const router = inject(Router);
    // Redirect back to the /signin route.
    router.navigate(['/signin'], {queryParams: {returnUrl: state.url} });
    return false;
  }
};
