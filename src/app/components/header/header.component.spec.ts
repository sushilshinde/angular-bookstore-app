import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { MaterialModule } from 'app/material_ui/material.module';
import { cartReducer } from 'app/store/cart.reducer';
import { HeaderComponent } from './header.component';

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports:[RouterTestingModule,HttpClientModule,MatToolbarModule,MatIconModule],
//       declarations: [HeaderComponent,],
//       providers:[cart,httpService]
//     });
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, MatToolbarModule,MatIconModule,  RouterTestingModule,StoreModule.forRoot({ cartItems: cartReducer })],
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
});
