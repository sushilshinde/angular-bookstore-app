import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { FooterComponent } from 'app/components/footer/footer.component';
import { HeaderComponent } from 'app/components/header/header.component';
import { MaterialModule } from 'app/shared/material_ui/material.module';
import { cartReducer } from 'app/store/cart.reducer';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () =>
{
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let debugElement: DebugElement;

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
  it('should display error message and "Back to Home" button', () =>
  {
    const errorMessage = debugElement.query(By.css('.error-message'));
    const backButton = debugElement.query(By.css('button'));

    expect(errorMessage.nativeElement.textContent).toContain("Oops! The page you are looking for doesn't exist.");
    expect(backButton.nativeElement.textContent).toContain('Back to Home');
  });
});
