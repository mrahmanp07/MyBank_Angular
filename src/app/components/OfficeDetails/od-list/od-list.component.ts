import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOfAccounts } from 'src/app/model/ChartOfAccounts';
import { User } from 'src/app/model/User';
import { OfficeDetails } from 'src/app/model/officeDetails';
import { AuthService } from 'src/app/service/auth.service';
import { OfficeDetailsService } from 'src/app/service/officeDetails.service';

@Component({
  selector: 'app-od-list',
  templateUrl: './od-list.component.html',
  styleUrls: ['./od-list.component.scss']
})
export class OdListComponent implements OnInit {
  userRole: string;
  
  constructor(public apiService: OfficeDetailsService, private route:Router, public authService: AuthService,  public v:OfficeDetailsService) {
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
        this.route.navigateByUrl("/chartofaccount/list");
      })
    }
  
    track(index:number,user:OfficeDetails){
      return user.id;
    }
  
  
  
  
    edit(_t14: User) {
    }
  
    ngOnInit(): void {
      this.authService.isLogin();
      this.getAll();
      // this.getA();
    }
  
   
  
    userList: OfficeDetails[] = [];
  
  
    getAll() {
      this.apiService.getAll().subscribe((res: any) => {
        this.userList = res;
      })
    }
  
  
    // newMessage() {
    //   this.apiService.changeMessage("Polin")
    // }
  
    
  
  }{

}
