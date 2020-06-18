import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';


const routes: Routes = [
  {path:"",redirectTo:"/departments",pathMatch:"full"},
  {path:"departments",component:DepartmentsComponent},
  {path:"departments/:id",component:DepartmentdetailComponent},
  {path:"employees",component:EmployeesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [DepartmentsComponent,EmployeesComponent,DepartmentdetailComponent]
