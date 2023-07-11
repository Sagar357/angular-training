import { Component } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormsModule ,Validators} from '@angular/forms';
import { forbiddenNameValidator } from './Shared/username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
  constructor(private fb:FormBuilder){}
  public RegistrationForm=this.fb.group({
    name:['Sagar' ,[Validators.required ,Validators.minLength(3),forbiddenNameValidator]],
    phone:[''],
    password:[''],
    confirm_password:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postal_code:['']
    })
  })
  // public RegistrationForm=new FormGroup(
  //   {
  //     name:new FormControl('ss'),
  //     password:new FormControl(''),
  //     confirm_password:new FormControl(''),
  //     address:new FormGroup({
  //       city:new FormControl(),
  //       state:new FormControl(),
  //       postal_code: new FormControl()
  //     })
  //   }
  // );
}
