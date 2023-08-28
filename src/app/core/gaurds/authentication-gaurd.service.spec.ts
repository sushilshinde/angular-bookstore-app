import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGaurdService } from './auth-gaurd.service';
import { AuthenticationGaurdService } from './authentication-gaurd.service';


describe('AuthenticationGaurdsService', () =>
{
  let service: AuthenticationGaurdService;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthGaurdService, HttpClient],
    });
    service = TestBed.inject(AuthenticationGaurdService);
  });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });
});
