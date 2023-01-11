import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Request } from '../request/request';
@Component({
  selector: 'app-releaseconfirm',
  templateUrl: './releaseconfirm.component.html',
  styleUrls: ['./releaseconfirm.component.css']
})
export class ReleaseconfirmComponent implements OnInit {
  id!: string;
  newId!: string
  constructor(
    private router: ActivatedRoute,
    private route: Router,
  ) { }

  ngOnInit(): void {

    this.id = this.router.snapshot.paramMap.get("reqId") ||''

    // this.newId=id||''
  }
 
  ok() {

    this.route.navigate(['/home'])
  }

}
