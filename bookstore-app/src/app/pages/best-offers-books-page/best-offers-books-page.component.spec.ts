/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BestOffersBooksPageComponent } from './best-offers-books-page.component';

describe('BestOffersBooksPageComponent', () => {
  let component: BestOffersBooksPageComponent;
  let fixture: ComponentFixture<BestOffersBooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestOffersBooksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOffersBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
