import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { HttpService } from 'app/core/services/http.service';
import { MaterialModule } from 'app/shared/material_ui/material.module';
import { getItem, removeItem } from 'app/store/cart.actions';
import { cartReducer } from 'app/store/cart.reducer';
import { of } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

import { CartPageComponent } from './cart-page.component';

describe('CartPageComponent', () =>
{
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let testStore: Partial<Store>;
  let testHttpService: Partial<HttpService>;

  beforeEach(() =>
  {
    testStore = {
      dispatch: jasmine.createSpy(),
      select: () => of({ cartItems: [] }),
    };

    testHttpService = {
      getBooks: () => of([]),
    };

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        StoreModule.forRoot({ cartItems: cartReducer }),
      ],
      declarations: [CartPageComponent, HeaderComponent, FooterComponent],
      providers: [
        { provide: Store, useValue: testStore },
        { provide: HttpService, useValue: testHttpService },
      ],
    });
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('should dispatch getItem action on initialization', () =>
  {
    fixture.detectChanges();
    expect(testStore.dispatch).toHaveBeenCalledWith(getItem());
  });

  it('should dispatch removeItem action when onRemoveHandler is called', () =>
  {
    const bookdata = {
      title: 'Happy Place',
      id: 1,
      price: 200,
      thumbnailUrl:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMtIHKz6P5NlEdwV3Mt1lL_fkoqXTj57c8hf-xXO06O6fIE3Gr',
      longDescription:
        "Harriet and Wyn have been the perfect couple since they met in college—they go together like salt and pepper, honey and tea, lobster and rolls. They broke up six months ago. And still haven't told their best friends. Which is how they find themselves sharing the largest bedroom at the Maine cottage that has been their friend group’s yearly getaway for the last decade. Their annual respite from the world, where for one vibrant, blue week they leave behind their daily lives; have copious amounts of cheese, wine, and seafood; and soak up the salty coastal air with the people who understand them most. Only this year, Harriet and Wyn are lying through their teeth while trying not to notice how desperately they still want each other. Because the cottage is for sale and this is the last week they’ll all have together in this place. They can’t stand to break their friends’ hearts, and so they’ll play their parts. Harriet will be the driven surgical resident who never starts a fight, and Wyn will be the laid-back charmer who never lets the cracks show. It’s a flawless plan (if you look at it from a great distance and through a pair of sunscreen-smeared sunglasses). After years of being in love, how hard can it be to fake it for one week… in front of those who know you best?",
      status: 'PUBLISH',
      authors: ['Emily Henry'],
      categories: ['Trending'],
      quantity: 3,
    };
    component.onRemoveHandeller(bookdata);
    expect(testStore.dispatch).toHaveBeenCalledWith(
      removeItem({ bookdata: { ...bookdata } })
    );
  });
});
