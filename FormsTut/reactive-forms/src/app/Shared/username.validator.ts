import { LowerCasePipe } from "@angular/common";
import { AbstractControl, ValidatorFn } from "@angular/forms";

//old validator
// export function forbiddenNameValidator(control:AbstractControl):{[key:string]:any}|null{
//     let val= control.value.toString();
//     const forbidden=/admin/.test(val.toLowerCase())
//     return forbidden?{'forbiddenName':{value:control.value}}:null; 
// }

//Factory Method.
export function forbiddenName(pattern:RegExp):ValidatorFn{
    return (control:AbstractControl):{[key:string]:any}|null=>{
        let val= control.value.toString();
        const forbidden=pattern.test(val.toLowerCase())
        return forbidden?{'forbiddenName':{value:control.value}}:null; 
    }
}