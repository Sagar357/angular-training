import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TdfPrj';
  public courses=['Asp .Net Core' ,'Angular' ,'React' ,'JavaScript']
  public isSelected=true;
  public userModel=new User('' ,"nunnu@sagar.com" ,8368946729 ,"" ,"Morning",true);
  public hasError=false;
  public value=false;
  public submitted=false;
  public errorMessage:any;
  constructor(private _enrollment:EnrollmentService){}
  /**
   * validateCourse
value:any   */
  public validateCourse(value:any) {
    this.value=value;
    if(value==='default')
    {
      this.hasError=true;
    }
    else
    {
      this.hasError=false;
    }
  }

  /**
   * onSubmit
   */
  public onSubmit() {
    this._enrollment.enroll(this.userModel).subscribe(
      data=>console.log("success!",data),
      error=>this.errorMessage=error.statusText
    );
    if(this.errorMessage===null){
    this.submitted=true;
    }
    else{
      this.submitted=false
    }
  }
}
