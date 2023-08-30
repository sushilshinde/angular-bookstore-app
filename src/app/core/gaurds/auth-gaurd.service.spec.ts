import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGaurdService } from './auth-gaurd.service';
import { AuthenticationService } from './authentication.service';

describe('AuthService', () =>
{
  let authService: AuthGaurdService;
  let authenticationService: AuthenticationService;
  let router: any;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, HttpClientTestingModule],
      providers: [AuthGaurdService, AuthenticationService],
    });

    authService = TestBed.inject(AuthGaurdService);
    authenticationService = TestBed.inject(AuthenticationService);
    router = TestBed.inject(Router);
  });

  it('should be created', () =>
  {
    expect(authService).toBeTruthy();
  });

  describe('canActivate', () =>
  {
    it('should return true if login status is true', () =>
    {
      spyOn(authenticationService, 'loginStatus').and.returnValue(true);

      const canActivate = authService.canActivate(null!, null!);

      expect(canActivate).toBe(true);
    });

    it('should navigate to "signin" and return false if login status is false', () =>
    {
      spyOn(authenticationService, 'loginStatus').and.returnValue(false);
      const routerNavigateSpy = spyOn(router, 'navigate');

      const canActivate = authService.canActivate(null!, null!);

      expect(canActivate).toBe(false);
      expect(routerNavigateSpy).toHaveBeenCalledWith(['signin']);
    });
  });
});
