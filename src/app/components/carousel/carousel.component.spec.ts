<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      imports:[NgbModule,RouterModule],
      declarations: [CarouselComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({}),
          },
        },
      ],
=======
      declarations: [CarouselComponent]
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
    });
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD

it ('should be minimum number of images',()=>{
  let element =fixture.nativeElement;
 let imagesarray=element.querySelectorAll('img')
expect(imagesarray.length).toBeGreaterThanOrEqual(2)
})

=======
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
});
