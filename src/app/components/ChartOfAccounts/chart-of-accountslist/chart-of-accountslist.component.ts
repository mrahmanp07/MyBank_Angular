import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOfAccounts } from 'src/app/model/ChartOfAccounts';
import { User } from 'src/app/model/User';
import { CoaElService } from 'src/app/service/CoaEl.service';
import { AuthService } from 'src/app/service/auth.service';
import { ChartOfAccountsService } from 'src/app/service/chart-of-accounts.service';

import { RestApiService } from 'src/app/service/rest-api.service';
import { VoucherdetailsService } from 'src/app/service/voucherdetails.service';

@Component({
  selector: 'app-chart-of-accountslist',
  templateUrl: './chart-of-accountslist.component.html',
  styleUrls: ['./chart-of-accountslist.component.scss']
})
export class ChartOfAccountslistComponent implements OnInit {
  userRole: string;
  
  constructor(public apiService: ChartOfAccountsService, private route:Router, public authService: AuthService,  public v:ChartOfAccountsService,
    private coaelService:CoaElService) {
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
  
    track(index:number,user:ChartOfAccounts){
      return user.id;
    }
  
  
  
  
    edit(_t14: User) {
    }
  
    ngOnInit(): void {
      this.authService.isLogin();
      this.getAll();
      // this.getA();
      this.getAllCoaEl();
    }
  
   
  
    userList: ChartOfAccounts[] = [];
  
  
    getAll() {
      this.apiService.getAll().subscribe((res: any) => {
        this.userList = res;
      })
    }
  
  
    // newMessage() {
    //   this.apiService.changeMessage("Polin")
    // }
  
    CoaElList!:any[]; 
  getAllCoaEl(){
    this.coaelService.getAll().subscribe({
      next:res => { 
        this.CoaElList = res;
      },
      error:res=>{
        console.log('Error!!');
        
      }
    })
  }
  
  }

