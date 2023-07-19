import { LowerCasePipe } from "@angular/common";
import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(control:AbstractControl):{[key:string]:any}|null{
    const str=control.value;
    const forbidden=/admin/.test(str.toLowerCase())
    return forbidden?{'forbiddenName':{value:control.value}}:null; 
}