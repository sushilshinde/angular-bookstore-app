import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BooksCategoryComponent } from './components/books-category/books-category.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { CategoryComponentComponent } from './components/books-category/category-component/category-component.component';
import { shortenPipe } from './shared/pipes/shorten.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ViewallBooksPageComponent } from './components/viewall-books-page/viewall-books-page.component';
import { OrderSuccessPageComponent } from './modules/order-success-page/order-success-page.component';
import { StylesDirective } from './shared/directives/styles.directive';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SortPipe } from './shared/pipes/sort.pipe';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { CartEffects } from './store/cart.effects';
import { MaterialModule } from './shared/material_ui/material.module';
import { ErrorStylesDirective } from './shared/directives/error-styles.directive';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    CarouselComponent,
    BooksCategoryComponent,
    FooterComponent,
    DetailPageComponent,
    CategoryComponentComponent,
    shortenPipe,
    SigninComponent,
    SignupComponent,
    CartPageComponent,
    ViewallBooksPageComponent,
    OrderSuccessPageComponent,
    StylesDirective,
    PageNotFoundComponent,
    SortPipe,
    ErrorStylesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    SlickCarouselModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({ cartItems: cartReducer }),
    EffectsModule.forRoot([CartEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
