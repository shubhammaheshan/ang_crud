import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  constructor(public service: AngularFirestore) {
  }

  public getData() {
    return this.service.collection('employee').snapshotChanges()
  }
}
