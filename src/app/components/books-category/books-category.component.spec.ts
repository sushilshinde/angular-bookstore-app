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

describe('BooksCategoryComponent', () => {
  let component: BooksCategoryComponent;
  let fixture: ComponentFixture<BooksCategoryComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,HttpClientTestingModule,SlickCarouselModule,RouterTestingModule,],
      declarations: [BooksCategoryComponent,CategoryComponentComponent],
      providers: [httpService]
    });
    fixture = TestBed.createComponent(BooksCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
