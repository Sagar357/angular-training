import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient ,HttpErrorResponse} from "@angular/common/http";
import {catchError} from 'rxjs/operators'
import {throwError} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  public _url='http://localhost:3000/enroll';
  constructor(private client:HttpClient) { }
  enroll(user:User){
    return this.client.post<any>(this._url,user).pipe(
      catchError(this.ErrorHandler)
    );
  }

  /**
   * ErrorHandler
   */
  public ErrorHandler(error:HttpErrorResponse) {
      return throwError(()=>error || "Server Error")
  }
}
