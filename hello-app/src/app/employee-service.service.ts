import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  getEmployees(){
    return[
      {"id" : 1, "name" : "Ram", "Age" : 22},
    {"id" : 2, "name" : "Raju", "Age" : 23},
    {"id" : 3, "name" : "Rami", "Age" : 24},
    {"id" : 4, "name" : "Raj", "Age" : 25}
    ];
  }
}
