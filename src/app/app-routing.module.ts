import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PagesComponent } from './shopping-cart/pages/pages.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shopping_cart',component:ShoppingCartComponent},
  {path:'shopping_cart/:id/:username',component:PagesComponent},
  {path:'my_orders',component:MyOrdersComponent},
  {path:'admin/orders',component:AdminOrdersComponent},
  {path:'admin/products',component:AdminProductsComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
