import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-departmentdetail',
  template: `<h1>You have selected id = {{departmentId}}</h1>
  <a (click)="goprevious()">Previous</a>
  <a (click)="gonext()">Next</a>`,
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent implements OnInit {
  public departmentId;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  goprevious(){
    let previousid = this.departmentId-1;
    this.router.navigate(['/departments',previousid]);
  }
  gonext(){
    let nextid = this.departmentId+1;
    this.router.navigate(['/departments',nextid]);
  }

}
