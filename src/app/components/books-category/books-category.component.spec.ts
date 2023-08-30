import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'app/core/services/http.service';
import { BooksCategoryComponent } from './books-category.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { of } from 'rxjs';

describe('BooksCategoryComponent', () =>
{
  let component: BooksCategoryComponent;
  let fixture: ComponentFixture<BooksCategoryComponent>;
  let testHttpService: Partial<HttpService>;

  beforeEach(() =>
  {
    testHttpService = {
      getBooks: () => of([]),
    };
  });

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        SlickCarouselModule,
        RouterTestingModule,
      ],
      declarations: [BooksCategoryComponent, CategoryComponentComponent],
      providers: [{ provide: HttpService, useValue: testHttpService }],
    });
    fixture = TestBed.createComponent(BooksCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
  it('should populate bestOfferBooks with books having discount', () =>
  {
    const mockBooks: any = [
      { id: 1, title: 'Book 1', discount: 10, categories: [] },
      { id: 2, title: 'Book 2', discount: 20, categories: [] },
    ];

    spyOn(testHttpService, 'getBooks' as any).and.returnValue(of(mockBooks));

    component.ngOnInit();

    expect(component.bestOfferBooks).toEqual(mockBooks);
  });

  it('should populate trendingBooks with books having "Trending" category', () =>
  {
    const mockBooks: any = [
      { id: 1, title: 'Book 1', categories: ['Trending'] },
      { id: 2, title: 'Book 2', categories: [] },
    ];

    spyOn(testHttpService, 'getBooks' as any).and.returnValue(of(mockBooks));

    component.ngOnInit();

    expect(component.trendingBooks).toEqual([mockBooks[0]]);
  });

  it('should populate allBooks with all books', () =>
  {
    const mockBooks: any = [
      { id: 1, title: 'Book 1', categories: [] },
      { id: 2, title: 'Book 2', categories: [] },
    ];

    spyOn(testHttpService, 'getBooks' as any).and.returnValue(of(mockBooks));

    component.ngOnInit();

    expect(component.allBooks).toEqual(mockBooks);
  });
});
