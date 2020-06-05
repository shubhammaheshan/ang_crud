import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
// import { AngularFireDatabase,fire} from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
 

   constructor() {
    
  }

  ngOnInit(): void {
  }

}

let data = 'shubham'

