import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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
});
