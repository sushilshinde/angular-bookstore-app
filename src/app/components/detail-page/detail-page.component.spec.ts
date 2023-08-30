import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { DetailPageComponent } from './detail-page.component';
import { HttpService } from 'app/core/services/http.service';
import { of } from 'rxjs';
import { cartReducer } from 'app/store/cart.reducer';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'app/shared/material_ui/material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DetailPageComponent', () =>
{
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;
  let httpservice: Partial<HttpService>;
  let mockStore: any;

  beforeEach(async () =>
  {
    httpservice = {
      getBooks: jasmine.createSpy('getBooks').and.returnValue(of({})),
      getBookDetails: jasmine.createSpy('getBookDetails').and.returnValue(of({})),
    };

    mockStore = {
      dispatch: jasmine.createSpy('dispatch'),
      select: jasmine.createSpy('select').and.returnValue(of({ cartItems: [{ id: 1 }] })),
    };

    await TestBed.configureTestingModule({
      declarations: [DetailPageComponent, HeaderComponent, FooterComponent],
      providers: [
        { provide: HttpService, useValue: httpservice },
        { provide: ActivatedRoute, useValue: { params: of({ id: 123 }) } }, // Provide a mock ActivatedRoute
        { provide: Store, useValue: mockStore },
      ],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MaterialModule, RouterTestingModule, CommonModule,
        StoreModule.forRoot({ cartItems: cartReducer }), // Set up a mock store module
      ],
    }).compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('should decrement the item count', () =>
  {
    component.count = 3; // Initial count
    component.onDecrement();
    expect(component.count).toBe(2);
  });

  it('should increment the item count', () =>
  {
    component.count = 3; // Initial count
    component.onIncrement();
    expect(component.count).toBe(4);
  });

  it('should calculate discounted price correctly', () =>
  {
    const price = 100;
    const discount = 20;
    const discountedPrice = component.calculateDiscount(price, discount);
    expect(discountedPrice).toBe(80);
  });
});
