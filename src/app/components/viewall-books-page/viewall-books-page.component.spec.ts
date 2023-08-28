import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'app/shared/material_ui/material.module';
import { SortPipe } from 'app/shared/pipes/sort.pipe';
import { HttpService } from 'app/core/services/http.service';
import { ViewallBooksPageComponent } from './viewall-books-page.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from 'app/store/cart.reducer';

describe('ViewallBooksPageComponent', () =>
{
  let component: ViewallBooksPageComponent;
  let fixture: ComponentFixture<ViewallBooksPageComponent>;
  let testHttpService: Partial<HttpService>;


  beforeEach(() =>
  {
    testHttpService = {
      getTrendingBooks: () => of([]),
      getBestOffersBooks: () => of([]),
      getBooks: () => of([]),
    };
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MaterialModule, FormsModule, StoreModule.forRoot({ cartItems: cartReducer })],
      declarations: [ViewallBooksPageComponent, SortPipe, HeaderComponent, FooterComponent],
      providers: [{ provide: HttpService, useValue: testHttpService }, {
        provide: ActivatedRoute,
        useValue: {
          params: of({ category: 'Trending' }), //default paramsseting to Trending
        },
      },],
    });
    fixture = TestBed.createComponent(ViewallBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
  it('should set default category to "Trending"', () =>
  {
    expect(component.category).toBe('Trending');
  });

  it('should fetch trending books when category is "Trending"', () =>
  {
    spyOn(testHttpService, 'getTrendingBooks' as any).and.callThrough();
    component.category = 'Trending';
    component.ngOnInit();
    expect(testHttpService.getTrendingBooks).toHaveBeenCalled();
  });

  it('should navigate to details page on book click', () =>
  {
    spyOn(component['navpage'], 'navigate').and.stub();
    const bookId = 123;
    component.navigateToDetails(bookId);
    expect(component['navpage'].navigate).toHaveBeenCalledWith(['details', bookId]);
  });
});