import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public employees=[];
public errorMsg;
  constructor(private _employeeservice: EmployeeServiceService) { }

  ngOnInit(): void {
    this._employeeservice.getEmployees()
    .subscribe(data => this.employees = data,
      error => this.errorMsg =error
      );
  }

}
