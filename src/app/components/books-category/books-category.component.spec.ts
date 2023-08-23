import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'app/core/services/http.service';
import { BooksCategoryComponent } from './books-category.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

describe('BooksCategoryComponent', () => {
  let component: BooksCategoryComponent;
  let fixture: ComponentFixture<BooksCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        SlickCarouselModule,
        RouterTestingModule,
      ],
      declarations: [BooksCategoryComponent, CategoryComponentComponent],
      providers: [HttpService],
    });
    fixture = TestBed.createComponent(BooksCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
