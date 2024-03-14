import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = "http://localhost:8080/coael";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addData(user: User){
    return this.httpClient.post(this.apiURL+"/save", user, this.httpOptions)
  }


  updateData(user: User){
    return this.httpClient.put(this.apiURL+"/"+ user.id, user)
  }

  getAll(){
    return this.httpClient.get(this.apiURL+"/getAll");
  }

  getByID(id: any){
    return this.httpClient.get(this.apiURL+ "/" + id);
  }



  deleteByID(id: any){
    return this.httpClient.delete(this.apiURL+ "/" + id);
  }



  private messageSource = new BehaviorSubject('false');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {  this.messageSource.next(message) }


}
