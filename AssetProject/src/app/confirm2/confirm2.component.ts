import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';

 



@Component({
  selector: 'app-confirm2',
  templateUrl: './confirm2.component.html',
  styleUrls: ['./confirm2.component.css']
})
export class Confirm2Component implements OnInit {
  rid!: string;
 
 

  constructor(private route:Router,private aroute:ActivatedRoute,private requestservice:RequestService) { }
 confirmopenrequest(){
  
this.route.navigate(['/home/software'])
alert("Open request send")
 }

  ngOnInit(): void {

    const Req=this.aroute.snapshot.paramMap.get("reqId")
     this.rid=Req||''

  }

}
