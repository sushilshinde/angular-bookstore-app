import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BooksCategoryComponent } from './components/books-category/books-category.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material_ui/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { CategoryComponentComponent } from './components/books-category/category-component/category-component.component';
import { shortenPipe } from './shorten.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { ViewallBooksPageComponent } from './pages/viewall-books-page/viewall-books-page.component';
import { BestOffersBooksPageComponent } from './pages/best-offers-books-page/best-offers-books-page.component';
import { TrendingBooksComponent } from './pages/trending-books-page/trending-books.component';
import { OrderSuccessPageComponent } from './pages/order-success-page/order-success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    CarouselComponent,
    BooksCategoryComponent,
    FooterComponent,
    DetailPageComponent, 
    CategoryComponentComponent,shortenPipe,
    SigninComponent,
    SignupComponent,
    ViewallBooksPageComponent,
    BestOffersBooksPageComponent,
    TrendingBooksComponent,
    OrderSuccessPageComponent
    
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, MatIconModule, ReactiveFormsModule, NgbModule, SlickCarouselModule, HttpClientModule,RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
  