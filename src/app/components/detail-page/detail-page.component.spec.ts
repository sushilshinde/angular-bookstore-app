import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import { DetailPageComponent } from './detail-page.component';
import { cartReducer } from 'app/store/cart.reducer';
import { addItem } from 'app/store/cart.actions';
import { cartState } from 'app/interfaces/interface.cartState';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;
  let router: Router;
  let store: Store<{ cartItems: cartState }>;
  let httpTestingController: HttpTestingController;//////////////////////////

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({ cartItems: cartReducer }),
      ],
      declarations: [DetailPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '1' } } },
        },
      ],
    });

    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    store = TestBed.inject(Store);
    httpTestingController = TestBed.inject(HttpTestingController);

    const testResponse = [
      {
        "title": "Happy Place",
        "id": 1,
        "price": 200,
        "thumbnailUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMtIHKz6P5NlEdwV3Mt1lL_fkoqXTj57c8hf-xXO06O6fIE3Gr",
        "longDescription": "Harriet and Wyn have been the perfect couple since they met in college—they go together like salt and pepper, honey and tea, lobster and rolls. They broke up six months ago. And still haven't told their best friends. Which is how they find themselves sharing the largest bedroom at the Maine cottage that has been their friend group’s yearly getaway for the last decade. Their annual respite from the world, where for one vibrant, blue week they leave behind their daily lives; have copious amounts of cheese, wine, and seafood; and soak up the salty coastal air with the people who understand them most. Only this year, Harriet and Wyn are lying through their teeth while trying not to notice how desperately they still want each other. Because the cottage is for sale and this is the last week they’ll all have together in this place. They can’t stand to break their friends’ hearts, and so they’ll play their parts. Harriet will be the driven surgical resident who never starts a fight, and Wyn will be the laid-back charmer who never lets the cracks show. It’s a flawless plan (if you look at it from a great distance and through a pair of sunscreen-smeared sunglasses). After years of being in love, how hard can it be to fake it for one week… in front of those who know you best?",
        "status": "PUBLISH",
        "authors": [
          "Emily Henry"
        ],
        "categories": [
          "Trending"
        ],
        "quantity":3,
      }
    ];

    component.ngOnInit();

    const req = httpTestingController.expectOne(
      'http://localhost:3000/books?id=1'
    );

    req.flush(testResponse);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onDecrement should decrement count', () => {
    component.count = 3;
    component.onDecrement();
    expect(component.count).toBe(2);
  });

  it('onIncrement should increment count', () => {
    component.count = 3;
    component.onIncrement();
    expect(component.count).toBe(4);
  });

  it('calculateDiscount should calculate correctly', () => {
    const discountedPrice = component.calculateDiscount(100, 10);
    expect(discountedPrice).toBe(90);
  });

  it('addToCart should dispatch action and navigate to cart', () => {
    const storeSpy = spyOn(store, 'dispatch');
    const routerSpy = spyOn(router, 'navigate');

    const bookdata =   {
      "title": "Happy Place",
      "id": 1,
      "price": 200,
      "thumbnailUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMtIHKz6P5NlEdwV3Mt1lL_fkoqXTj57c8hf-xXO06O6fIE3Gr",
      "longDescription": "Harriet and Wyn have been the perfect couple since they met in college—they go together like salt and pepper, honey and tea, lobster and rolls. They broke up six months ago. And still haven't told their best friends. Which is how they find themselves sharing the largest bedroom at the Maine cottage that has been their friend group’s yearly getaway for the last decade. Their annual respite from the world, where for one vibrant, blue week they leave behind their daily lives; have copious amounts of cheese, wine, and seafood; and soak up the salty coastal air with the people who understand them most. Only this year, Harriet and Wyn are lying through their teeth while trying not to notice how desperately they still want each other. Because the cottage is for sale and this is the last week they’ll all have together in this place. They can’t stand to break their friends’ hearts, and so they’ll play their parts. Harriet will be the driven surgical resident who never starts a fight, and Wyn will be the laid-back charmer who never lets the cracks show. It’s a flawless plan (if you look at it from a great distance and through a pair of sunscreen-smeared sunglasses). After years of being in love, how hard can it be to fake it for one week… in front of those who know you best?",
      "status": "PUBLISH",
      "authors": [
        "Emily Henry"
      ],
      "categories": [
        "Trending"
      ],
      "quantity":3,
    }

    component.count = 3;
    component.addToCart(bookdata);

    expect(storeSpy).toHaveBeenCalledWith(
      addItem({ bookdata: { ...bookdata, quantity: 3 } })
    );
    expect(routerSpy).toHaveBeenCalledWith(['/cart']); //////////////////
  });
});
