import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
 /* templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']*/
  template:`
  <h2>{{name}}</h2>
  <h2>{{name|lowercase}}</h2>
  <h2>{{name|uppercase}}</h2>
  <h2>{{message|titlecase}}</h2>
  <h2>{{message|slice:0:7}}</h2>
  <h2>{{percent|percent}}</h2>
  <h2>{{percent|number:'1.2-3'}}</h2>
  <h2>{{percent|number:'1.3-4'}}</h2>
  <h2>{{percent|number:'2.2-3'}}</h2>
  <h2>{{currency|currency}}</h2>
  <h2>{{currency|currency:'INR'}}</h2>
  <h2>{{currency|currency:'INR':'code'}}</h2>
  <h2>{{date|date:'short'}}</h2>
  <h2>{{date|date:'shortDate'}}</h2>
  <h2>{{date|date:'shortTime'}}</h2>
  `,
  styles:[``]
})
export class TestComponent {

  public name="Codevolution";
  public percent=0.25;
  public currency=20;
  public date=new Date();
  public message="Welcome to Codevolution";
  public person={
    "firstName":"John",
    "lastName":"Doe"
  }

}
