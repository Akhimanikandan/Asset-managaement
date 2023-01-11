import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request/request';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cancellist',
  templateUrl: './cancellist.component.html',
  styleUrls: ['./cancellist.component.css']
})
export class CancellistComponent implements OnInit {
  reqStatus!: string;
 reqId!:string
  errorMessage: any;
  request:Request[]=[];
  id!: string;
  constructor(private requestService:RequestService,private route:ActivatedRoute,private router:Router ) { }

  backtohome(){
    this.router.navigate(['home/software'])
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("reqId")||''
   
    

this.requestService.getcancelRequestlist().subscribe({
  next: request => {
    this.request = request;
    console.log(request);
    
  },
  error: err => this.errorMessage = err
}
)
  }

}
