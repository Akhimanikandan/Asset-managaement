import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../loginservice';
import { Employee } from './employee';
import { Router } from  '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 employee:Employee=new Employee();
  constructor(private fb: FormBuilder, private loginservice:LoginService, private router:Router ) { }
  Form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  login(){ 

   
   this.loginservice.loginEmployee(this.employee).subscribe(data=>{
   
  sessionStorage.setItem("authenticated", "true")
   sessionStorage.setItem("userName",this.employee.username)
  
   
  
    if(this.loginservice.isAuthenticated()){
      
      this.router.navigate(['home'])
      
    
     } alert("logged in successfully")
     
   
 
   },error=> alert("enter correct credientials"))
  
   
   
  
   
  }
  ngOnInit(): void {
  }

}
