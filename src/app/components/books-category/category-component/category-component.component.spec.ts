import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BooksCategoryComponent } from '../books-category.component';
import { CategoryComponentComponent } from './category-component.component';
describe('CategoryComponentComponent', () =>
{
  let component: CategoryComponentComponent;
  let fixture: ComponentFixture<CategoryComponentComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [SlickCarouselModule, RouterTestingModule],
      declarations: [CategoryComponentComponent, BooksCategoryComponent],
    });
    fixture = TestBed.createComponent(CategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('should render the title', () =>
  {
    component.title = 'Trending';
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement.textContent).toContain('Trending');
  });
  it('should render the title', () =>
  {
    component.title = 'Best Offers';
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement.textContent).toContain('Best Offers');
  });
  it('should render the title', () =>
  {
    component.title = 'Available Books';
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement.textContent).toContain('Available Books');
  });
  it('should navigate to details page on image click', () =>
  {
    spyOn(component['navpage'], 'navigate').and.stub();
    const bookId = 123;
    component.navigateToDetails(bookId);
    expect(component['navpage'].navigate).toHaveBeenCalledWith([
      'details',
      bookId,
    ]);
  });
});
