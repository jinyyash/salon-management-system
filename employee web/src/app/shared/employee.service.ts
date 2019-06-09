import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = 'mongodb+srv://jinadi:Anohana@123@cluster0-kbku3.mongodb.net/test?retryWrites=true+srv://max:QuBqs0T45GDKPlIG@cluster0-ntrwp.mongodb.net/node-angular'

  constructor(private http: HttpClient) { }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }
  
}
