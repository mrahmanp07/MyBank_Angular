import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { RestApiService } from '../service/rest-api.service';
import { AuthService } from '../service/auth.service';
import { VoucherdetailsService } from '../service/voucherdetails.service';
import { Router } from '@angular/router';
import { CoaElements } from '../model/coael';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
userRole: string;

constructor(public apiService: RestApiService, private route:Router, public authService: AuthService,  public v:VoucherdetailsService) {
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
      this.route.navigateByUrl("/list");
    })
  }

  track(index:number,usern:CoaElements){
    return usern.id;
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


  newMessage() {
    this.apiService.changeMessage("Saiful")
  }

  

}
