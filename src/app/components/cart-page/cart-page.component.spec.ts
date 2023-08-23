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

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let testStore: Partial<Store>;
  let testHttpService: Partial<HttpService>;

  beforeEach(() => {
    testStore = {
      dispatch: jasmine.createSpy(),
      select: () => of({ cartItems: [] }),
    };

    testHttpService = {
      getBooks: () => of([]),
    };

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,MaterialModule,
        StoreModule.forRoot({ cartItems: cartReducer }),
      ],
      declarations: [CartPageComponent,HeaderComponent,FooterComponent],
      providers: [
        { provide: Store, useValue: testStore },
        { provide: HttpService, useValue: testHttpService },
      ],
    });
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getItem action on initialization', () => {
    fixture.detectChanges();
    expect(testStore.dispatch).toHaveBeenCalledWith(getItem());
  });

  it('should dispatch removeItem action when onRemoveHandler is called', () => {
    const itemId = 123;
    component.onRemoveHandeller(itemId);
    expect(testStore.dispatch).toHaveBeenCalledWith(removeItem({ id: itemId }));
  });
});
