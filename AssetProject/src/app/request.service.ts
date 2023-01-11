import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Request } from './request/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  handleError: any;
  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:8081/requestlist"
 


  


sendReqobj(requestobj:Request):Observable<object>{
    console.log(requestobj)
    return this.httpClient.post(`${this.baseUrl}/send`,requestobj);
  }
  getOpenRequestlist(userName: string):Observable<Request[]>{
    console.log();
    
    return this.httpClient.get<[]>(`${this.baseUrl}/openreq/Processing/${userName}`)
    // .pipe(catchError(this.handleError));
 
}
getReleaseRequestlist():Observable<Request[]>{
  return this.httpClient.get<[]>(`${this.baseUrl}/openreq/Approved/`)
  // .pipe(catchError(this.handleError));

}
getcancelRequestlist():Observable<Request[]>{
  return this.httpClient.get<[]>(`${this.baseUrl}/openreq/cancelled/`)
}
  updateRequest(reqStatus:string,reqId:string):Observable<any>{
    console.log("working"+reqStatus+reqId); 
    return this.httpClient.put(`${this.baseUrl}/cancel/?status=${reqStatus}&reqId=${reqId}`,null).pipe(catchError(this.handleError));
 
}



}
