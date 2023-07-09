import { Component ,Input ,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template:`<div>
  <!--<h2 [class.text-success]="applySuccess=='yes'">Welcome {{name}} </h2>
  <h2 class="text-special" [class]="DangerClass" >codevolution</h2>
  <h2 [ngClass]="messageClasses">codevolution</h2>
  <h2 [style.color]="'orange'">Style Binding</h2>
  <h2 [style.color]="hasError?'red':'green'">Style Binding</h2>
  <h2 [style.color]="highlightColor">Style Binding</h2> 
  <h2 [ngStyle]="messageStyles">Style Binding</h2> -->
<!--class 9
  <button (click)="clickHandler($event)">Click Me</button>
  <button (click)="clickHandler($event)">Lambda</button>
<p>{{greetMessage}}</p>-->
<!--class 10
<input #myinput type="text"/>
<button (click)="logHandle(myinput.value)">Log</button>-->
<!--class 11
<input [(ngModel)]="name" type="text" />
{{name}}-->
<!-- class 12
<!--first way-->
<h2 *ngIf="hasError; else:displayElse" [class]="DangerClass">
If Block Rendered
</h2>
<ng-template #displayElse>
<h2 [class]="SuccessClass">
  Else Block Rendered
</h2>
</ng-template>

<!--2nd way-->
<div *ngIf="hasError; then ifblock2; else elseblock2"> 
</div>
<ng-template #ifblock2>
  <h2>
    way 2 if block rendered.
  </h2>
  </ng-template>
  <ng-template #elseblock2>
  <h2>
    way 2 else block rendered.
  </h2>
  </ng-template> -->
  <!--class 13
  <div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">You Picked red color</div>
  <div *ngSwitchCase="'green'">You Picked green color</div>
  <div *ngSwitchCase="'blue'">You Picked blue color</div>
  <div *ngSwitchDefault>Pick Again</div>
  </div>-->
  <!--class14<table>
  <div *ngFor="let color of colors;  index as i; last as l; first as f;">
  <tr><td [class.text-danger]="f" [class.text-success]="l">{{i+1}}</td><td [class.text-danger]="f" [class.text-success]="l" >{{color}}</td></tr>
  </div>
  </table>-->
  <p>{{parentname}}</p>
  <button (click)="fireEvent()">Fire Event</button>
  </div>`,
  //styleUrls: ['./test.component.css']
  styles:[`
  .text-success{
    color:green;  
  }
  .text-danger{
    color:red;
  }
  .text-special
  {
    font-style:italic;
  }`]
})
export class TestComponent {
  @Input("parentName") parentname:any;
  public color="bluer"
  public name="Annu";
  public SuccessClass="text-success";
  public DangerClass="text-danger";
  public SpecialClass="text-special";
  public applySuccess='yes';
  public highlightColor="blue";
  public hasError=false;
  public isSpecial=false;
  public greetMessage="";
  public colors=["Red" ,"Blue" ,"Green" ,"Orange"]
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  public messageStyles={
    color:"yellow",
    fontStyle:"italic"
  }

  public clickHandler(event:any)
  {
    console.log(event);
    this.greetMessage=event.type;
  }

  public logHandle(value:any)
  {
    console.log(value)
  }

  @Output() childEvent=new EventEmitter();
  public fireEvent()
  {
      this.childEvent.emit("Welcome to Angular..")
  }
}
