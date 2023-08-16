import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material_ui/material.module';

// import { OrderSuccessPageComponent } from './order-success-page.component';

// describe('OrderSuccessPageComponent', () => {
//   let component: OrderSuccessPageComponent;
//   let fixture: ComponentFixture<OrderSuccessPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[MaterialModule,RouterTestingModule],
      declarations: [OrderSuccessPageComponent]
    });
    fixture = TestBed.createComponent(OrderSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
