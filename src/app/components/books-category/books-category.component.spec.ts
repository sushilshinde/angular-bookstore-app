import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/material_ui/material.module';
import { httpService } from 'src/app/services/http.service';
import { cartReducer } from 'src/app/store/cart.reducer';
import { BooksCategoryComponent } from './books-category.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BooksCategoryComponent', () => {
  let component: BooksCategoryComponent;
  let fixture: ComponentFixture<BooksCategoryComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient,HttpClientTestingModule,httpService,NgModule, MaterialModule,  RouterTestingModule,StoreModule.forRoot({ cartItems: cartReducer })],
      declarations: [BooksCategoryComponent],
    });
    fixture = TestBed.createComponent(BooksCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
