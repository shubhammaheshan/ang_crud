import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Form, NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';
import { firestore } from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public emp: EmployeeService,
    public fire: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm()
  }

  public resetForm(form?: NgForm) {
    // console.log(form);

    if (form != null) {
      // console.log(form);

      form.resetForm();
    }
    this.emp.formData = {
      id: null,
      fullname: "",
      empcode: "",
      mobile: "",
      position: ""
    }

  }

  Submitdata(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    console.log(data)
    if (form.value.id == null) {
      this.fire.collection('employee').add(data)
      this.toastr.success('Submitted Successfully', 'EMP. Register');
    }
    else {
      this.fire.doc('employee/' + form.value.id).update(data);
      this.toastr.success('Updated Successfully', 'EMP. Register');
    }
    this.resetForm(form);


  }



}
