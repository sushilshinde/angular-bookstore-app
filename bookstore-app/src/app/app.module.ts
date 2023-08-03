import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeadderComponent } from './components/headder/headder.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BooksCategoryComponent } from './components/books-category/books-category.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material_ui/material.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
// import { HttpClientModule } from '@angular/common/http';

import { CategoryComponentComponent } from './components/books-category/category-component/category-component.component';
import { shortenPipe } from './shorten.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeadderComponent,
    CarouselComponent,
    BooksCategoryComponent,
    FooterComponent,
    DetailPageComponent, 
    CategoryComponentComponent,shortenPipe,
    SigninComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, MatIconModule, ReactiveFormsModule, NgbModule, SlickCarouselModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
  