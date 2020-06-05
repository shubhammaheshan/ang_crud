import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
export interface Sample{
  val:boolean,
  toal:string
}
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  // inputs:['sirname']
})


export class ShoppingCartComponent  {
 productdata:Array<any> = [{id:1,name:"shubham"},
 {id:2,name:"Raj"}]
  constructor(public routes:Router){

  }
  changeLink(data){
    console.log(data);
    this.routes.navigate(['shopping_cart',data.id,data.name])
    
  }

}
