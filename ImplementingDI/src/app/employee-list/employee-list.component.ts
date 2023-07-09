import { Component ,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
 /* templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']*/
  template:`
  <div>
  <h2>Employee List</h2>
  <h4>{{ErrorMessage}} </h4>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  </div>`,
  styles:[]
})
export class EmployeeListComponent implements OnInit{
  public employees=[{"id":0, "name":"" ,"age":0}];
  public ErrorMessage="";
  constructor(private _employeeservice:EmployeeService){}

  ngOnInit(): void {
    this._employeeservice.getEmployees()
    .subscribe(data=>this.employees=data,
      error=>this.ErrorMessage=error);
    console.log(this.employees);
  }
}
