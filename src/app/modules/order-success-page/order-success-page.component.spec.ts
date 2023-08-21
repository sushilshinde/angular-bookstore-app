import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { FooterComponent } from 'app/components/footer/footer.component';
import { HeaderComponent } from 'app/components/header/header.component';
import { MaterialModule } from 'app/shared/material_ui/material.module';
import { cartReducer } from 'app/store/cart.reducer';

import { OrderSuccessPageComponent } from './order-success-page.component';

describe('OrderSuccessPageComponent', () => {
  let component: OrderSuccessPageComponent;
  let fixture: ComponentFixture<OrderSuccessPageComponent>;
  let debugElement: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[MaterialModule,FormsModule,RouterTestingModule,HttpClientTestingModule,StoreModule.forRoot({ cartItems: cartReducer })],
      declarations: [OrderSuccessPageComponent,HeaderComponent,FooterComponent]
    });
    fixture = TestBed.createComponent(OrderSuccessPageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display success message and continue shopping button', () => {
    const tickIcon = debugElement.query(By.css('.tickicon'));
    const message = debugElement.query(By.css('h2'));
    const continueShoppingButton = debugElement.query(By.css('button'));

    expect(tickIcon).toBeTruthy();
    expect(message.nativeElement.textContent).toContain('Order placed Successfully...');
    expect(continueShoppingButton).toBeTruthy();
  });
 
});
