import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap,Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template:`<h3>You Selected Department with Id {{departmentId}}</h3>
  <p><button (click)="renderOverview()">Overview</button></p>
  <p><button (click)="renderContact()">Contact</button></p>
  <p><router-outlet></router-outlet></p>
  <a (click)="goPrevious()">Previous</a>
  <a (click)="goNext()">Next</a>
 <!-- <p routerLink="/employee" routerLinkActive="active"><a>Back</a></p>-->
 <p (click)="home()">
  <a>Back</a>
 </p>
  `,
  styles:[]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId:any;
  public prev:any;
  public next:any;
  public constructor(private _activatedroute:ActivatedRoute ,private router:Router){}
  ngOnInit() {
    //let id=this._activatedroute.snapshot.paramMap.get('id');
   // this.departmentId=id;
   this._activatedroute.paramMap.subscribe((ob:ParamMap)=>{
    let param=ob.get("id");
    this.departmentId=param==null?0:parseInt(param);
   })
  }

  goPrevious(){
    let prev=this._activatedroute.snapshot.paramMap.get('id');
    this.prev=prev!=null?parseInt(prev)-1:0;
    this.router.navigate([this.prev],{relativeTo:this._activatedroute});
  }
  goNext(){
    let next=this._activatedroute.snapshot.paramMap.get('id');
    this.next=next!=null?parseInt(next)+1:0;
    this.router.navigate([this.next] ,{relativeTo:this._activatedroute});
  }

  home()
  {
      let id=this._activatedroute.snapshot.paramMap.get("id");
      this.router.navigate([{id:id}] ,{relativeTo:this._activatedroute}); //optional parameter
  }

  
  public renderOverview() {
    this.router.navigate(['Overview'],{relativeTo:this._activatedroute})
  }

  public renderContact() {
    this.router.navigate(['Contact'],{relativeTo:this._activatedroute})
  }
}
