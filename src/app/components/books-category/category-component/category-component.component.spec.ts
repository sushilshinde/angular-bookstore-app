import { RouterTestingModule } from "@angular/router/testing";
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CategoryComponentComponent } from './category-component.component';

describe('CategoryComponentComponent', () => {
  let component: CategoryComponentComponent;
  let fixture: ComponentFixture<CategoryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[SlickCarouselModule,RouterTestingModule],
        

      declarations: [CategoryComponentComponent],
    });
    fixture = TestBed.createComponent(CategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should render the title', () => {
  //   component.title = 'Best Offers';
  //   fixture.detectChanges();
  //   const titleElement: HTMLElement = fixture.nativeElement.querySelector('h2');
  //   expect(titleElement.textContent).toContain('Best Offers');
  // });
  // it('should render the title', () => {
  //   component.title = 'Best Offers';
  //   fixture.detectChanges();
  //   const titleElement: HTMLElement = fixture.nativeElement.querySelector('h2');
  //   expect(titleElement.textContent).toContain('Trending');
  // });
  // it('should render the title', () => {
  //   component.title = 'Available Books';
  //   fixture.detectChanges();
  //   const titleElement: HTMLElement = fixture.nativeElement.querySelector('h2');
  //   expect(titleElement.textContent).toContain('Available Books');
  // });
});
