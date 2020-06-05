import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
public para;
  constructor(private acti:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.acti.snapshot);
    
    // this.para = parseInt(this.acti.snapshot.paramMap.get('id'));
    // console.log(this.para);
    this.acti.paramMap.subscribe(posres=> {
      // console.log(posres);
      let val = +posres.get('id') //using plus operator convert string to int
      console.log(val);
      
      
    })
    
  }

}
