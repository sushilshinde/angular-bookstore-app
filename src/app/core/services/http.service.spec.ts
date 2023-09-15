import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';

describe('http service', () =>
{
  let http: HttpService;
  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    http = TestBed.inject(HttpService);
  });

  it('should be created', () =>
  {
    expect(http).toBeTruthy()
  })
});
