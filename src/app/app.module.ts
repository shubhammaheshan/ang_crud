import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ToggleDirective } from './navabar/toggle.directive';

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth"; //cloud database
import { AngularFirestoreModule } from 'angularfire2/firestore'; //cloud database
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AuthService } from './login/auth.service';
import { LogoutComponent } from './logout/logout.component';
import {FormsModule} from "@angular/forms"
import {ReactiveFormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http";
import { PagesComponent } from './shopping-cart/pages/pages.component';
import { EmployeeComponent } from './firebase/employee/employee.component';
import { EmployeeListComponent } from './firebase/employee-list/employee-list.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,HomeComponent,NavabarComponent,ProductsComponent,ShoppingCartComponent,CheckOutComponent,OrderSuccessComponent,MyOrdersComponent,LoginComponent,AdminOrdersComponent,AdminProductsComponent, ToggleDirective, LogoutComponent, PagesComponent, EmployeeComponent, EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
