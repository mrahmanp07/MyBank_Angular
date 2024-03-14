import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOfAccounts } from 'src/app/model/ChartOfAccounts';
import { User } from 'src/app/model/User';
import { CoaElements } from 'src/app/model/coael';
import { CoaElService } from 'src/app/service/CoaEl.service';
import { AuthService } from 'src/app/service/auth.service';
import { RestApiService } from 'src/app/service/rest-api.service';
import { VoucherdetailsService } from 'src/app/service/voucherdetails.service';

@Component({
  selector: 'app-CoaElList',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CoaElListComponent implements OnInit {
  userRole: string;
  
  constructor(public apiService: CoaElService, private route:Router, public authService: AuthService,) {
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
        this.route.navigateByUrl("coael/list");
      })
    }
  
    track(index:number,user:CoaElements){
      return user.id;
    }
  
  
  
  
    edit(_t14: User) {
    }
  
    ngOnInit(): void {
      this.authService.isLogin();
      this.getAll();
      // this.getA();
    }
  
   
  
    userList: CoaElements[] = [];
  
  
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
{

}
