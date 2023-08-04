import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: "full" },
  { path: 'details', component: DetailPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
