import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
import { SlickCarouselModule } from 'ngx-slick-carousel';
=======
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6

import { CategoryComponentComponent } from './category-component.component';

describe('CategoryComponentComponent', () => {
  let component: CategoryComponentComponent;
  let fixture: ComponentFixture<CategoryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
        imports:[SlickCarouselModule,RouterTestingModule],
=======
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
      declarations: [CategoryComponentComponent],
    });
    fixture = TestBed.createComponent(CategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD
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
=======
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
});
