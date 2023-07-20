import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray ,Validators, Form} from '@angular/forms';
import { forbiddenName } from './Shared/username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactive-forms';
  constructor(private fb:FormBuilder){}
  public RegistrationForm!: FormGroup;

  ngOnInit(): void {
    this.RegistrationForm=this.fb.group({
      name:['Sagar' ,[Validators.required ,Validators.minLength(3),forbiddenName(new RegExp('[a^]'))]],
      phone:[''],
      subscribe:[''],
      email:[''],
      password:[''],
      confirm_password:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        postal_code:['']
      }),
      alternateEmail:this.fb.array([])
    })
    
    this.RegistrationForm.get('subscribe')?.valueChanges
      .subscribe(ischecked=>{
        const emailControl=this.RegistrationForm.get('email');
        if(ischecked){
          emailControl?.setValidators(Validators.required);
        }
        else{
          emailControl?.clearValidators();
        }
        emailControl?.updateValueAndValidity();
      });
  }
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

  /**
   * getUserName
   * getter method to replace RegistrationForm.get('name') in app.component.html
   */
  get getUserName() {
    return this.RegistrationForm.get('name');
    
  }

  get getEmail(){
    return this.RegistrationForm.get('email');
  }

  get getAlternateEmail(){

    return this.RegistrationForm.get('alternateEmail') as FormArray;
  }

  public addAlternateEmails(){
    this.getAlternateEmail.push( this.fb.control(''));
  }
}
