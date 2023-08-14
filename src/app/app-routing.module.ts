import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SignupComponent } from './pages/signup-page/signup.component';
import { SigninComponent } from './pages/signin-page/signin.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ViewallBooksPageComponent } from './pages/viewall-books-page/viewall-books-page.component';
import { OrderSuccessPageComponent } from './pages/order-success-page/order-success-page.component';
import { AuthService } from './auth.service';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: "full" },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'details/:id', component: DetailPageComponent,canActivate:[AuthService]},
  { path: 'cart', component: CartPageComponent, canActivate:[AuthService]},
  { path: 'viewall/:category', component: ViewallBooksPageComponent },
  {path:'buy',component:OrderSuccessPageComponent},
  {path:'search/:search',component:SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
