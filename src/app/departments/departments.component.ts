import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-departments',
  template: `<h1>Departments</h1>
  <ul *ngFor = "let employee of Employees">
  <li>{{employee.id}}--{{employee.name}}--{{employee.department}}</li>
  </ul>
  <ul>
  <li (click)="onSelect(department)" *ngFor = "let department of departments">
  <span> {{department.id}}</span>{{department.name}}
  </ul>`,
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  public Employees = [];
  departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"MongoDB"}
  ]

  constructor(private _employeeService:EmployeeService, private router:Router) { }

  ngOnInit() {
    this._employeeService.hello().subscribe(data=>this.Employees = data);
    
  }
  onSelect(department){
    this.router.navigate(["/departments",department.id])
  }

}
