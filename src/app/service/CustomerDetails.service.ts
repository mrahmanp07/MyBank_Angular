import { CustomerDetails } from './../model/CustomerDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {
constructor(private httpClient: HttpClient) { }

private apiURL = "http://localhost:8080/customerdetails";

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

addData(data: any){
  return this.httpClient.post(this.apiURL+"/save", data, this.httpOptions)
}


updateData(data: any){
  return this.httpClient.put(this.apiURL+"/"+ data.id, data)
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


}