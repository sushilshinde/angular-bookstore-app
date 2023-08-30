import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ViewallBooksPageComponent } from './components/viewall-books-page/viewall-books-page.component';
import { OrderSuccessPageComponent } from './modules/order-success-page/order-success-page.component';
import { AuthGaurdService } from './core/gaurds/auth-gaurd.service';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { AuthenticationGaurdService } from './core/gaurds/authentication-gaurd.service';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent, canActivate: [AuthenticationGaurdService] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthenticationGaurdService] },
  {
    path: 'details/:id',
    component: DetailPageComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: 'cart', component: CartPageComponent,
    canActivate: [AuthGaurdService],
  },
  { path: 'viewall/:category', component: ViewallBooksPageComponent },
  {
    path: 'buy', component: OrderSuccessPageComponent,
    canActivate: [AuthGaurdService],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
