import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetails } from 'src/app/model/CustomerDetails';
import { User } from 'src/app/model/User';
import { CustomerDetailsService } from 'src/app/service/CustomerDetails.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrls: ['./cd-list.component.scss']
})
export class CdListComponent implements OnInit {
  userRole: string;
  
  constructor(public apiService: CustomerDetailsService, private route:Router, public authService: AuthService,  public v:CustomerDetailsService) {
    this.userRole = localStorage.getItem("role") ?? ""
  }
  // jsonDate:any[] = [];
  
  // getA(){
  //   this.v.getAll().subscribe((res: any) => {
  //     this.jsonDate = res;
  //     console.log(this.jsonDate)
  //   })
  // }
   
    delete(id: any) {
      this.apiService.deleteByID(id).subscribe((val: any) => {
        // let index = this.userList.findIndex(e=>e.id==id)
        // this.userList.splice(index,1)
        this.getAll();
        this.route.navigateByUrl("/cd/list");
      })
    }
  
    track(index:number,user:CustomerDetails){
      return user.id;
    }
  
  
  
  
    edit(_t14: User) {
    }
  
    ngOnInit(): void {
      this.authService.isLogin();
      this.getAll();
      // this.getA();
    }
  
   
  
    userList: CustomerDetails[] = [];
  
  
    getAll() {
      this.apiService.getAll().subscribe((res: any) => {
        this.userList = res;
      })
    }
  
  
    // newMessage() {
    //   this.apiService.changeMessage("Polin")
    // }
  
    
  
  }