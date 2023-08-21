import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'app/shared/material_ui/material.module';

import { OrderSuccessPageComponent } from './order-success-page.component';

describe('OrderSuccessPageComponent', () => {
  let component: OrderSuccessPageComponent;
  let fixture: ComponentFixture<OrderSuccessPageComponent>;
  let debugElement: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [OrderSuccessPageComponent],
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
    expect(message.nativeElement.textContent).toContain(
      'Order placed Successfully...'
    );
    expect(continueShoppingButton).toBeTruthy();
  });
});
