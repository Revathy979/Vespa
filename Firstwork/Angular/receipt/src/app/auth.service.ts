import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userRegistration } from './models/userRegistration';
import { tap,mapTo,catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public registerUserData(regData:userRegistration){
    console.log(" auth service called=>registerUserData()");
    console.log(regData);
    return this.http.post("http://iteamone.online/rest/api/v1/auth/register/",regData);
  }
  public loginData(userCredential:any){
    console.log(" auth service called=>loginData");
    console.log(userCredential);
    return this.http.post("http://iteamone.online/rest/api/v1/auth/",userCredential);

  }
  public storeAuthToken(authToken:string){
    localStorage.setItem('auth_token',authToken);
  }
  public getAuthToken(){
    return localStorage.getItem('auth_token');
  }
  public isLoggedIn(){
    return !!this.getAuthToken();
  }
  public removeAuthToken(){
    localStorage.removeItem('auth_token');
  }
  public logOut(){
    let requestOptions={
      headers:new HttpHeaders({'Authorization':'Bearer abc',}),
    }
    return this.http.post<any>("http://iteamone.online/rest/api/v1/auth/signout/", {}, requestOptions).pipe(
      tap(() => this.removeAuthToken()),
      mapTo(true),
      catchError(error => {
          console.log(error.error);
          return of(false);
      }));
  }
}
