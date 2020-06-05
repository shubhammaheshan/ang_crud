import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { Subscription, Observable, from } from 'rxjs';
import { trigger, state, animation, transition, style, animate } from '@angular/animations';
import {slide, keyframe} from '../animation'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  animations: [
    trigger('fade', [

      state('void', style({ opacity: 0 })),

      transition('* <=> void', [
        // style({ opacity: 0 }),
        animate(2000)
      ]),
    ]),
      slide  ,
      keyframe
  ]
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  list: Employee[];
  subscribe: Subscription;


  constructor(public service: EmployeeService,
    public firestore: AngularFirestore,
    private toastr: ToastrService) { }
  ngOnInit() {


    this.subscribe = this.service.getData().subscribe(posres => {
      this.list = posres.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as {}
        } as Employee
      })
      console.log(this.list);

    })
  }

  trackByEmpCode(index: number, employee: any): string {
    console.log(index);
    console.log(employee);


    return employee.empcode;
  }

  EditData(nameData) {
    this.service.formData = Object.assign({}, nameData)
  }

  deleteData(id: string) {
    console.log(id);
    this.firestore.doc('employee/' + id).delete()
    this.toastr.success('Deleted Successfully', 'EMP. Register');
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }



  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
