// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { ActivatedRoute } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { StoreModule } from '@ngrx/store';
// import { of } from 'rxjs';
// import { MaterialModule } from 'src/app/material_ui/material.module';
// import { cartReducer } from 'src/app/store/cart.reducer';

// import { HeaderComponent } from './header.component';

// describe('HeadderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;


//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [ MaterialModule, MatToolbarModule,MatIconModule,  RouterTestingModule,StoreModule.forRoot({ cartItems: cartReducer })],
//     declarations: [HeaderComponent],
//     providers: [
//       {
//         provide: ActivatedRoute,
//         useValue: {
//           paramMap: of({}),
//         },
//       },
//     ],
//     });
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
