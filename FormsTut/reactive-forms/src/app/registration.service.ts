import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  _url="http://localhost:3000/enroll"
  constructor(private _client:HttpClient) { }

  /**
   * register
postdata:any   */
  public register(postdata:any) {
    return this._client.post<any>(this._url ,postdata)
    
  }
}
