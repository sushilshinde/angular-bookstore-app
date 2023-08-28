import { ComponentFixture, TestBed } from '@angular/core/testing';
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
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AppComponent', () =>
{

  beforeEach(() => TestBed.configureTestingModule({
    imports: [MatToolbarModule, MatIconModule, HttpClientTestingModule, RouterTestingModule, StoreModule.forRoot({ cartItems: cartReducer })],
    declarations: [AppComponent, HeaderComponent, FooterComponent],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: null
      },
    ],

  })

  );


  it('should create the app', () =>
  {
    expect(AppComponent).toBeTruthy();
  });

  it('should render header, router-outlet, and footer', () =>
  {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    const routerOutlet = compiled.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  })

});
