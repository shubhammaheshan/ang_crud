import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent{
  icClick = false;

  handleClick(){
     this.icClick = !this.icClick;
  }
  constructor(public auth:AuthService) { 
  
    }
    logout(){
        this.auth.logout()
    }
  
 

}
