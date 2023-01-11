import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AssetService } from '../software/asset.service';
import { SoftwareAsset } from '../software/SoftwareAsset';
import { Request } from '../request/request';
import { RequestService } from '../request.service';
// import { Employee } from '../login/employee';
// import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-confirmopen',
  templateUrl: './confirmopen.component.html',
  styleUrls: ['./confirmopen.component.css']
})
export class ConfirmopenComponent implements OnInit {
  errorMessage: any;
  requestobj: Request = new Request();

  asset!: SoftwareAsset;

  
  reqId!: string;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private assetservice: AssetService, private requestservice: RequestService,

  

  ) { }

  ok() {
    this.requestobj.category = this.asset.category;
    this.requestobj.manufacturer = this.asset.manufacturer;
    this.requestobj.softwareName = this.asset.softwareName;
    this.requestobj.userName =sessionStorage.getItem("userName")
    console.log(this.requestobj.userName);
    
   
 
   

    this.requestobj.reqStatus = 'Processing';
    this.reqId = "REQSOFT" + new Date().getTime();
    this.requestobj.reqId = this.reqId;

    console.log(this.reqId);
    this.requestservice.sendReqobj(this.requestobj).subscribe(() => {
      alert("Open request send")
      this.route.navigate(['/confirm2', this.reqId])
    })

    
  }

  ngOnInit(): void {

    const id = this.router.snapshot.paramMap.get("id")
    const newId = parseInt(id || '')
    console.log(id);

    this.assetservice.getSoftwareId(newId).subscribe({
      next: asset => { this.asset = asset },

      error: err => this.errorMessage = err


    })

  }

}


