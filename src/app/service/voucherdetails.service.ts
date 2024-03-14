import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoucherdetailsService {

  private apiURL = "http://localhost:8080/voucherdetails";

  constructor(private httpClient: HttpClient, private router: Router) {
   }

   addData(vd: any) {
    return this.httpClient.post(this.apiURL, vd)
  }

  updateData(vd: any) {
    return this.httpClient.put(this.apiURL + "/" + vd.id, vd)
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL);
  }

  getByID(id: any) {
    return this.httpClient.get(this.apiURL + "/" + id);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.apiURL + "/" + id);
  }



  isLogin() {
    let login = localStorage.getItem("isLogin");
    if (login !== "true") {
      this.router.navigateByUrl('/login');
    }
  }


}
