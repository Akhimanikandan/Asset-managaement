import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap, catchError,throwError } from 'rxjs';
import { SoftwareAsset } from './SoftwareAsset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:8081/software/viewAll"
  private IdUrl="http://localhost:8081/software/id"
  private searchUrl="http://localhost:8081/software/search"




  getSoftwareList(pageNumber:number):Observable<SoftwareAsset>{
  return this.httpClient.get<SoftwareAsset>(`${this.baseUrl}/${pageNumber}/5`).pipe(
    catchError(this.handleError)
  );
  }
  // getSoftwareList(pageNumber:number,pageSize:number):Observable<SoftwareAsset>{
  // return this.httpClient.get<SoftwareAsset>(`${this.baseUrl}/${pageNumber}/${pageSize}`).pipe(
  //   catchError(this.handleError)
  // );
  // }


  getSoftwareId(id:number):Observable<SoftwareAsset>{
    return this.httpClient.get<SoftwareAsset>(`${this.IdUrl}/
    ${id}`).pipe(
      catchError(this.handleError)
    );
  
    }

    getSearchBySoftware(searchTerm:string):Observable<SoftwareAsset[]>{
      return this.httpClient.get<SoftwareAsset[]>(`${this.searchUrl}/${searchTerm}`);

    }
  
  private handleError(err:HttpErrorResponse){
    let errormessage='';
    if(err.error.instanceof (ErrorEvent)){
        errormessage= `error occured: ${err.error.message}`;
        
    } else {
        errormessage = `server returned code: ${err.status}, error message is:${err.message}`;

    }
    console.error(errormessage);
    return throwError(()=>errormessage)
}
}
