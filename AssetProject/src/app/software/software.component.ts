import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AssetService } from './asset.service';
import { SoftwareAsset } from './SoftwareAsset';
import { Request } from '../request/request';
import { outputAst } from '@angular/compiler';
import { __values } from 'tslib';


@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
  errorMessage: any;
  softwareavAliableList!: SoftwareAsset[];
  currentPage!: number;
  totalItem: any;
  totalPage: any;
  list!: SoftwareAsset[];
  count!: number;

  searchTerm!:SoftwareAsset[];
  request: Request[]=[];

  

  constructor(private assetservice: AssetService,
    private router: Router,

  ) {
   }

  // pageNumber: number = 0;
  // pageSize: number = 5;
  assetDetails!: SoftwareAsset[];
  softwareasset: any;

  private _searchResult:string='';

  get searchResult(){
    return this._searchResult
  }
   set searchResult(value:string){
    this._searchResult=value;
    this.search(value);
 
   }
  

  raise(id: number) {
    this.router.navigate(['/confirmopen', id])

  }
  Openrequestlist() {


    this.router.navigate(['home/openrequestlist'])

  }
  Releaserequest() {
    this.router.navigate(['home/releaserequestlist'])
  }


  
  onTableDataChange(event: number) {
    this.getSoftwares(event - 1);
    this.currentPage = event;
  }

  private getSoftwares(pageNumber: number) {
    this.assetservice.getSoftwareList(pageNumber).subscribe({
      next: data => {
        this.softwareasset=data
     
        
        this.list = this.softwareasset.softwareAvaliableList;
        this.count = this.softwareasset.totalItem;
       
      }
      
    });
  }
  private search(_searchResult:string){
    this.assetservice.getSearchBySoftware(this.searchResult).subscribe({
      next:data=>{
    this.list=data;
      }
      })
  }
  
  ngOnInit(): void {
    this.getSoftwares(0);

    

    

  }
}
