import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';



// const AUTH_API = 'http://localhost:8080/api/auth/';


// const AUTH_API_REG = 'http://localhost:8080/';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = "http://localhost:3000/auth";


  constructor(private httpClient: HttpClient, private router: Router) { }

  addData(user: any) {
    return this.httpClient.post(this.apiURL, user)
  }

  updateData(user: any) {
    return this.httpClient.put(this.apiURL + "/" + user.id, user)
  }

  getAll() {
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


  // login(username: string, password: string): Observable<any> {
  //   return this.http.post(
  //     AUTH_API + 'signin',
  //     {
  //       username,
  //       password,
  //     },
  //     httpOptions
  //   );
  // }

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.http.post(
  //     AUTH_API_REG + 'signup',
  //     {
  //       username,
  //       email,
  //       password,
  //     },
  //     httpOptions
  //   );
  // }

  // logout(): Observable<any> {
  //   return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  // }




}
