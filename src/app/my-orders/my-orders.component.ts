import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employee';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  public errmsg: any;
  public arraydata: Employee[] = [];

  constructor(private service: AuthserviceService) {
  }
  ngOnInit(): void {
    this.service.getData().subscribe((posres: any) => {
      // this.arraydata = posres
      posres.forEach(element => {
        // console.log(element);
        this.arraydata.push({ id: element.id, title: element.title, userId: element.userId })

      });
      // console.log(this.arraydata);



    }, error => {
      this.errmsg = error;
    })
  }
  postData(input: HTMLInputElement) {

    let val:any = { value: input.value }
    input.value = "";
    this.arraydata.unshift(val)
    this.service.PostData(val).subscribe(posres => {
      console.log(posres);

      
    }, this.errcallback)
  }

  UpdateData(data) {
    this.service.UpdateData(data).subscribe(posres => {
      console.log(posres);

    }, this.errcallback)
  }


  DeleteData(data) {
    let index = this.arraydata.indexOf(data)
    console.log(index);
    this.arraydata.splice(index, 1)
    this.service.DeleteData(data).subscribe(posres => {
    }, this.errcallback)
  }

  public errcallback = (err: HttpErrorResponse) => {
    // if(err.status)
    if (err.error instanceof Error) {
      console.log("client side error");
    }
    else {
      console.log("Server side error");
    }
  }

}
