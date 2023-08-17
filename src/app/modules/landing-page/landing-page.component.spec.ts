import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BooksCategoryComponent } from 'app/components/books-category/books-category.component';
import { CategoryComponentComponent } from 'app/components/books-category/category-component/category-component.component';
import { CarouselComponent } from 'app/components/carousel/carousel.component';
import { HttpService } from 'app/core/services/http.service';
import { LandingPageComponent } from './landing-page.component';
describe('LandingPageComponent', () =>
{
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, NgbModule, SlickCarouselModule, RouterTestingModule],
      declarations: [LandingPageComponent, CarouselComponent, BooksCategoryComponent, CategoryComponentComponent],
      providers: [HttpService]
    });
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('should render carousel component and category component', () =>
  {
    const compile = fixture.nativeElement
    const carousel = compile.querySelector('app-carousel');
    const booksCategory = compile.querySelector('app-books-category');
    expect(carousel).toBeTruthy();
    expect(booksCategory).toBeTruthy();
  })

});
