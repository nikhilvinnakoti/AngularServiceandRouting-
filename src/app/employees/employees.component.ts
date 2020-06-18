import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  template: `<h1>Employees</h1>
  <ul *ngFor = "let employee of Employees">
  <li>{{employee.id}}--{{employee.name}}</li>
  </ul>`,
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public Employees = [];
  constructor(private _employeeservice:EmployeeService) { }

  ngOnInit(){
    this._employeeservice.hello().subscribe(data=>this.Employees = data);
  }

}
