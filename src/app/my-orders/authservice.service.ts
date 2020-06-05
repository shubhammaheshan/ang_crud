import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }

  getData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url).catch(this.errMethod);
  }
  PostData(val) {
    return this.http.post(this.url, val);
 
  }
  UpdateData(data) {
    return this.http.patch(this.url + "/" + data.id, { val: data.id });
  }
  DeleteData(data) {
    return this.http.delete(this.url + "/" + data.id);
  } 

  public errMethod(error:HttpErrorResponse){
      return Observable.throw(error.message || "Server Error")
  }
}
