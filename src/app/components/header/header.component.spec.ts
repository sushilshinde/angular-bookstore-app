import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { MaterialModule } from 'app/shared/material_ui/material.module';
import { cartReducer } from 'app/store/cart.reducer';

import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, NgModel } from '@angular/forms';

describe('FooterComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        FormsModule,
        RouterTestingModule,
        StoreModule.forRoot({ cartItems: cartReducer }),
      ],
      declarations: [HeaderComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({}),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display username when logged in', () => {
    const testUser = { name:'John Doe' };
    localStorage.setItem('userdetails', JSON.stringify(testUser));
    fixture.detectChanges();

    const usernameElement =
      fixture.debugElement.nativeElement.querySelector('.username');
    expect(usernameElement.textContent).toContain(
      'Welcome' + ' ' + testUser.name.toLocaleUpperCase()
    );
  });

  it('should display cart icon with badge', () => {
    component.count = 5;
    fixture.detectChanges();

    const cartIcon = fixture.debugElement.nativeElement.querySelector('.cart');
    const badge = cartIcon.querySelector('.mat-badge-content');

    expect(badge.textContent).toBe('5');
  });
});
