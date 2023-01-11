import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Request } from '../request/request';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {
id!: string;
newId!:string
reqStatus='cancelled'
  constructor(
    private requestService:RequestService,
    private router: ActivatedRoute,
    private route: Router,
  ) { }

  ngOnInit(): void {
  this.id=this.router.snapshot.paramMap.get("reqId")||''
   
  }
  ok(){
    this.route.navigate(['/cancellist',this.id])

    this.requestService.updateRequest(this.reqStatus,this.id).subscribe({
      next: request => {
        ;
  }})

}}
