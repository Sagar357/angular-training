import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WorkingWithPipes';
  public center= {
    margin: "auto",
    width: "50%",
    padding: "10px"
  }
}
