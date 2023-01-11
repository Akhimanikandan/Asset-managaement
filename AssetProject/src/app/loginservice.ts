import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './login/employee';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl="http://localhost:8081/user/login"
  constructor(private httpClient: HttpClient) { }
  userRole=" "

  isAuthenticated(){
    return sessionStorage.getItem("authenticated")
  }
  authenticate(){
    sessionStorage.setItem("authenticated", "true")

    this.userRole="employee"
  }
  


  loginEmployee(employee:Employee):Observable<object>{
     
  return this.httpClient.post(`${this.baseUrl}`,employee);
  }
}
