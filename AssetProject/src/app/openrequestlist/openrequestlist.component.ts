import { Component, OnInit } from '@angular/core';
import { Request } from '../request/request';
import {  Router } from '@angular/router';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-openrequestlist',
  templateUrl: './openrequestlist.component.html',
  styleUrls: ['./openrequestlist.component.css']
})
export class OpenrequestlistComponent implements OnInit {
request: Request[] = [];
reqStatus!:string;
errorMessage:any
userName: string | null= sessionStorage.getItem("userName")


  constructor(
   
    private router: Router,
    private requestService: RequestService

  ) { }
 
  ngOnInit(): void {
    
    console.log(this.userName);
    this.requestService.getOpenRequestlist(this.userName).subscribe({
      next: request => {
        this.request = request;
        console.log(request);
        
      },
      error: err => this.errorMessage = err
    }
    )
  
  }
  cancel(reqId:string){
    
console.log(reqId);

this.router.navigate(['/cancellation',reqId])
  }

}
