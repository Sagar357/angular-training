import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
  public RegistrationForm=new FormGroup(
    {
      name:new FormControl('ss'),
      password:new FormControl(''),
      confirm_password:new FormControl(''),
      address:new FormGroup({
        city:new FormControl(),
        state:new FormControl(),
        postal_code: new FormControl()
      })
    }
  );
}
