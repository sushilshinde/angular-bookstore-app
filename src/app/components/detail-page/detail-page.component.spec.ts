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

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;
  let httpservice: Partial<HttpService>;
  let mockStore: any;

  beforeEach(async () => {
    httpservice = {
      getBooks: jasmine.createSpy('getBooks').and.returnValue(of({"title":"Happy Place","id":1,"price":100,discount:20,"thumbnailUrl":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMtIHKz6P5NlEdwV3Mt1lL_fkoqXTj57c8hf-xXO06O6fIE3Gr","longDescription":"Harriet and Wyn have been the perfect couple since they met in college—they go together like salt and pepper, honey and tea, lobster and rolls. They broke up six months ago. And still haven't told their best friends. Which is how they find themselves sharing the largest bedroom at the Maine cottage that has been their friend group’s yearly getaway for the last decade. Their annual respite from the world, where for one vibrant, blue week they leave behind their daily lives; have copious amounts of cheese, wine, and seafood; and soak up the salty coastal air with the people who understand them most. Only this year, Harriet and Wyn are lying through their teeth while trying not to notice how desperately they still want each other. Because the cottage is for sale and this is the last week they’ll all have together in this place. They can’t stand to break their friends’ hearts, and so they’ll play their parts. Harriet will be the driven surgical resident who never starts a fight, and Wyn will be the laid-back charmer who never lets the cracks show. It’s a flawless plan (if you look at it from a great distance and through a pair of sunscreen-smeared sunglasses). After years of being in love, how hard can it be to fake it for one week… in front of those who know you best?","status":"PUBLISH","authors":["Emily Henry"],"categories":["Trending"]})),
    };
    
    mockStore = {
      dispatch: jasmine.createSpy('dispatch'),
      select: jasmine.createSpy('select').and.returnValue(of({ cartItems: [{ id: 1 }] })),
    };

    await TestBed.configureTestingModule({
      declarations: [DetailPageComponent,HeaderComponent,FooterComponent],
      providers: [
        { provide: HttpService, useValue: httpservice },
        { provide: ActivatedRoute, useValue: { params: of({ id: 123 }) } }, // Provide a mock ActivatedRoute
        { provide: Store, useValue: mockStore },
      ],
      imports: [HttpClientTestingModule,MaterialModule,RouterTestingModule,CommonModule,
        StoreModule.forRoot({ cartItems: cartReducer }), // Set up a mock store module
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decrement the item count', () => {
    component.count = 3; // Initial count
    component.onDecrement();
    expect(component.count).toBe(2);
  });

  it('should increment the item count', () => {
    component.count = 3; // Initial count
    component.onIncrement();
    expect(component.count).toBe(4);
  });

  it('should calculate discounted price correctly', () => {
    const price = 100;
    const discount = 20;
    const discountedPrice = component.calculateDiscount(price, discount);
    expect(discountedPrice).toBe(80);
  });
});
