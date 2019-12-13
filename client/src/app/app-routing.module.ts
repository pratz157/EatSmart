import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageHeaderComponent } from './home-page-header/home-page-header.component';
import { EmpLoginPageComponent } from './emp-login-page/emp-login-page.component';
import { CanManagerLoginPageComponent } from './can-manager-login-page/can-manager-login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { EmpLoggedInHeaderComponent } from './emp-logged-in-header/emp-logged-in-header.component';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';
import { OrderBreakfastComponent } from './order-breakfast/order-breakfast.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CanManagerLoggedInHeaderComponent } from './can-manager-logged-in-header/can-manager-logged-in-header.component';
import { CanManagerLoggedInPageComponent } from './can-manager-logged-in-page/can-manager-logged-in-page.component';


const routes: Routes = [
  {path : '', component : EmpLoginPageComponent},
  {path : 'emp_login', component : EmpLoginPageComponent},
  {path : 'canManager_login', component : CanManagerLoginPageComponent},
  {path : 'signUp', component : SignUpPageComponent },
  {path : 'emp_loggedIn', component : LoggedInPageComponent},
  {path : 'emp_loggedIn/orderToday' , component : LoggedInPageComponent},
  {path : 'orderBreakfast/:eatTime', component : OrderBreakfastComponent },
  {path : 'checkout', component : CheckoutPageComponent},
  {path : 'canteenManager_loggedIn', component : CanManagerLoggedInPageComponent},
  {path : 'canManager_loggedIn', component : CanManagerLoggedInPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
