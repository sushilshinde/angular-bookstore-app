<<<<<<< HEAD
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/material_ui/material.module';
import { httpService } from 'src/app/services/http.service';
import { cartReducer } from 'src/app/store/cart.reducer';
import { BooksCategoryComponent } from './books-category.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCategoryComponent } from './books-category.component';
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6

describe('BooksCategoryComponent', () => {
  let component: BooksCategoryComponent;
  let fixture: ComponentFixture<BooksCategoryComponent>;

<<<<<<< HEAD

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,HttpClientTestingModule,SlickCarouselModule,RouterTestingModule,],
      declarations: [BooksCategoryComponent,CategoryComponentComponent],
      providers: [httpService]
=======
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksCategoryComponent],
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
    });
    fixture = TestBed.createComponent(BooksCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD
  
=======
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
});
