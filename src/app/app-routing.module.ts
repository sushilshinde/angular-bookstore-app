import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ViewallBooksPageComponent } from './components/viewall-books-page/viewall-books-page.component';
import { OrderSuccessPageComponent } from './modules/order-success-page/order-success-page.component';
import { AuthService } from './core/gaurds/auth.service';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  {
    path: 'details/:id',
    component: DetailPageComponent,
    
  },
  { path: 'cart', component: CartPageComponent,  },
  { path: 'viewall/:category', component: ViewallBooksPageComponent },
  { path: 'buy', component: OrderSuccessPageComponent },
  { path: 'search/:search', component: SearchComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
