import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iemployees } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url:string = "/assets/employees.json"
  constructor(private http: HttpClient) { }
  hello(): Observable<Iemployees[]>{
      return this.http.get<Iemployees[]>(this.url)
    
      
  }
}
