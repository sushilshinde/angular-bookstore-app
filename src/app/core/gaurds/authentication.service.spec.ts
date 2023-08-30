import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGaurdService } from './auth-gaurd.service';

describe('AuthenticationService', () =>
{
  let authenticationService: AuthenticationService;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthGaurdService, HttpClient],
    });

    authenticationService = TestBed.inject(AuthenticationService);
  });

  it('should be created', () =>
  {
    expect(authenticationService).toBeTruthy();
  });
  it('should return login status', () =>
  {
    expect(authenticationService.loginStatus()).toBeTruthy();
  })

});
