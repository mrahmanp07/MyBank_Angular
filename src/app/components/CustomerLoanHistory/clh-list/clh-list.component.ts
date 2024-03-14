import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLoanHistory } from 'src/app/model/CustomerLoanHistory';
import { User } from 'src/app/model/User';
import { CustomerLoanHistoryService } from 'src/app/service/CustomerLoanHistory.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-clh-list',
  templateUrl: './clh-list.component.html',
  styleUrls: ['./clh-list.component.scss']
})
export class ClhListComponent implements OnInit {
  userRole: string;
  
  constructor(public apiService: CustomerLoanHistoryService, private route:Router, public authService: AuthService,  public v:CustomerLoanHistoryService) {
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
  
    track(index:number,user:CustomerLoanHistory){
      return user.id;
    }
  
  
  
  
    edit(_t14: User) {
    }
  
    ngOnInit(): void {
      this.authService.isLogin();
      this.getAll();
      // this.getA();
    }
  
   
  
    userList: CustomerLoanHistory[] = [];
  
  
    getAll() {
      this.apiService.getAll().subscribe((res: any) => {
        this.userList = res;
      })
    }
  
  
    // newMessage() {
    //   this.apiService.changeMessage("Polin")
    // }
  
    
  
  }

{

}
