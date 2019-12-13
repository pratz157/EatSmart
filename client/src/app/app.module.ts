import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HomePageHeaderComponent } from './home-page-header/home-page-header.component';
import { EmpLoginPageComponent } from './emp-login-page/emp-login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { EmpLoggedInHeaderComponent } from './emp-logged-in-header/emp-logged-in-header.component';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';
import { OrderBreakfastComponent } from './order-breakfast/order-breakfast.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CanManagerLoginPageComponent } from './can-manager-login-page/can-manager-login-page.component';
import { CanManagerLoggedInHeaderComponent } from './can-manager-logged-in-header/can-manager-logged-in-header.component';
import { CanManagerLoggedInPageComponent } from './can-manager-logged-in-page/can-manager-logged-in-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AddItemComponent } from './add-item/add-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EmpSrvService } from './services/emp-srv.service';




@NgModule({
  declarations: [
    AppComponent,
    HomePageHeaderComponent,
    EmpLoginPageComponent,
    SignUpPageComponent,
    EmpLoggedInHeaderComponent,
    LoggedInPageComponent,
    OrderBreakfastComponent,
    CheckoutPageComponent,
    CanManagerLoginPageComponent,
    CanManagerLoggedInHeaderComponent,
    CanManagerLoggedInPageComponent,
    AddItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],

  entryComponents: [
    AddItemComponent
  ],

  providers: [EmpSrvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
