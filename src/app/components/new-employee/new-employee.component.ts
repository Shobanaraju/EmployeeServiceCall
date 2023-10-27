import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeClass } from 'src/app/employee-class';
import { Employee2 } from 'src/app/interfaces/employee2';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit  {

  details:EmployeeClass[]=[]

  dataArray: any[] = [];

 


  constructor(private apiService: ApiServiceService){



  }
  ngOnInit(): void {
    this.apiService.getEmployeeDetails();
    this.apiService.employeeDetails$.subscribe((data) => {
      console.log(data)
      // if (Array.isArray(data)) {
      //   this.details = data;
      //   console.log(this.details)
      // } else {
      //   // Handle the case where data is not an array (e.g., an object)
      //   console.error('Invalid data received:', data);
      // }
    });

    
    
    
    // .subscribe((response: any) => {
      
    //   this.dataArray = response;
      
    //   console.log(this.dataArray)
     

    // });
  }

  
}
