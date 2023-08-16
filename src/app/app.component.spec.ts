<<<<<<< HEAD
import {ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
describe('AppComponent', () => {
    
  beforeEach(() => TestBed.configureTestingModule({
    imports: [  MatToolbarModule,MatIconModule,  RouterTestingModule,StoreModule.forRoot({ cartItems: cartReducer })],
    declarations: [AppComponent,HeaderComponent,FooterComponent],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          paramMap: of({}),
        },
      },
    ],

  })
  
  );

  
  it('should create the app', () => {
    expect(AppComponent).toBeTruthy();
  });

  it('should render header, router-outlet, and footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    const header = compiled.querySelector('app-header');
    const routerOutlet = compiled.querySelector('router-outlet');
    const footer = compiled.querySelector('app-footer');
    expect(header).toBeTruthy();
    expect(routerOutlet).toBeTruthy();
    expect(footer).toBeTruthy();
  })

=======
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bookstore-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bookstore-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('bookstore-app app is running!');
  });
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
});
