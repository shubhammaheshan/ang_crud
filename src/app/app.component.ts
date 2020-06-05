import { Component } from '@angular/core';
import {Sample} from "./shopping-cart/shopping-cart.component"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  buttonval;
  mapdata = 'map'
  title = 'Organic';
  public counter

  log(){
    alert('hi')
  }
  public arrayData = []
  public data = {
      title:"angular",
      rating:4.9898,
      student:12345,
      price:120.63,
      releaseDate:new Date()
  }

  giveData(data:Sample){
    this.counter = data.val
  }

  getbuttonval(){
    setTimeout(() => {
      this.buttonval = null;
    }, 2000);
  }
}
