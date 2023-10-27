import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee2 } from '../interfaces/employee2';
import { HttpClient } from '@angular/common/http';
import { EmployeeClass } from '../employee-class';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private employeeDetails:BehaviorSubject<EmployeeClass[]>=new BehaviorSubject<EmployeeClass[]>([]);



 employeeDetails$ = this.employeeDetails.asObservable();

  constructor(private _http: HttpClient) { }


  getEmployeeDetails(){
    console.log("services")
 this._http.get<EmployeeClass[]>('http://dummy.restapiexample.com/api/v1/employees')
 .subscribe({
    next: (response) => {
      this.employeeDetails.next(response);
      console.log(response)
    },
    error: () => {
      this.employeeDetails.next([]);
      alert("Employee details cannot be loaded.")
    },



  });
// .subscribe((response)=>{
//   console.log(response);
// this.employeeDetails.next(response);
// return this.employeeDetails.value
  
// })
  
}
}
