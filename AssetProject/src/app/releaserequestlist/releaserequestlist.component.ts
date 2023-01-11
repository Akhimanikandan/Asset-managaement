import { Component, OnInit } from '@angular/core';
import { Request } from '../request/request';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-releaserequestlist',
  templateUrl: './releaserequestlist.component.html',
  styleUrls: ['./releaserequestlist.component.css']
})
export class ReleaserequestlistComponent implements OnInit {
  request: Request[] = [];
  reqStatus!:string;
  errorMessage:any
  requestobj:Request=new Request();
  reqId!: string;
  constructor(

    private router: Router,
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.requestService.getReleaseRequestlist().subscribe({
      next: request => {
        this.request = request;
      },
      error: err => this.errorMessage = err
    }
    )
  }
  release(reqId:string){
    this.reqId= this.requestobj.reqId;
    console.log(reqId);
    
    this.router.navigate(['/releaseconfirm' ,reqId])
      }
}

