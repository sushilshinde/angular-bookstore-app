import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () =>
{
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(() =>
  {
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
