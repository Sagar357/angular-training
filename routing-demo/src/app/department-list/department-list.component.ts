import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router ,Route  } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template:`
  <h2>Department List</h2>
  <ul *ngFor="let department of departments">
  <li [class.danger]="selectedIndex(department)" [style.cursor]="pointer" (click)="onselect(department);">{{department.id}}:-{{department.name}}</li>
  </ul>
  `,
  styles:[`.danger{
    color:red;
  }`]
})
export class DepartmentListComponent implements OnInit {
  public pointer="pointer"
  public class="";
  public index=0;
  public departments=[
    {'id':1 ,'name':'Angular'},
    {'id':2 ,"name":"Node"},
    {'id':3 ,"name":"MongoDB"},
    {'id':4 ,"name":"Ruby"},
    {'id':5 ,"name":"Bootstrap"},
  ];

  public constructor(public router:Router ,private activatedurl:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedurl.paramMap.subscribe((ob:ParamMap)=>{
      let id=ob.get("id");
      if(id!=null)
      {
        this.index=parseInt(id)
      }
    });
  }
  public selectedIndex(department:any){
    return department.id===this.index;
  }
  public onselect(department:any){
      //this.router.navigate(['/department' ,department.id])
      this.router.navigate([department.id] ,{relativeTo:this.activatedurl})
  }
 
}
