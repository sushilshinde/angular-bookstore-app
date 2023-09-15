import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { OrderSuccessPageComponent } from './order-success-page.component';

describe('OrderSuccessPageComponent', () =>
{
  let component: OrderSuccessPageComponent;
  let fixture: ComponentFixture<OrderSuccessPageComponent>;
  let debugElement: DebugElement;
  beforeEach(() =>
  {
    fixture = TestBed.createComponent(OrderSuccessPageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
  it('should display success message and continue shopping button', () =>
  {
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
