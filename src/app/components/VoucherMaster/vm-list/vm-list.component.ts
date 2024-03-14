import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { VoucherMaster } from 'src/app/model/VoucherMaster';
import { VoucherMasterService } from 'src/app/service/VoucherMaster.service';
import { AuthService } from 'src/app/service/auth.service';
import { VoucherdetailsService } from 'src/app/service/voucherdetails.service';

@Component({
  selector: 'app-vm-list',
  templateUrl: './vm-list.component.html',
  styleUrls: ['./vm-list.component.scss']
})
export class VmListComponent implements OnInit {
  userRole: string;
  
  constructor(public apiService: VoucherMasterService, private route:Router, public authService: AuthService,  public v:VoucherMasterService) {
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
        this.route.navigateByUrl("/vm/list");
      })
    }
  
    track(index:number,user:VoucherMaster){
      return user.id;
    }
  
  
  
  
    edit(_t14: User) {
    }
  
    ngOnInit(): void {
      this.authService.isLogin();
      this.getAll();
      // this.getA();
    }
  
   
  
    userList: VoucherMaster[] = [];
  
  
    getAll() {
      this.apiService.getAll().subscribe((res: any) => {
        this.userList = res;
      })
    }
  
  
    // newMessage() {
    //   this.apiService.changeMessage("Polin")
    // }
  
    
  
  }


