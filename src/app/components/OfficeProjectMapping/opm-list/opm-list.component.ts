import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfficeProjectMapping } from 'src/app/model/OfficeProjectMapping';
import { User } from 'src/app/model/User';
import { OfficeProjectMappingService } from 'src/app/service/OfficeProjectMapping.Service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-opm-list',
  templateUrl: './opm-list.component.html',
  styleUrls: ['./opm-list.component.scss']
})
export class OpmListComponent implements OnInit {
  userRole: string;
  
  constructor(public apiService: OfficeProjectMappingService, private route:Router, public authService: AuthService,  public v:OfficeProjectMappingService) {
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
        this.route.navigateByUrl("/opm/list");
      })
    }
  
    track(index:number,user:OfficeProjectMapping){
      return user.id;
    }
  
  
  
  
    edit(_t14: User) {
    }
  
    ngOnInit(): void {
      this.authService.isLogin();
      this.getAll();
      // this.getA();
    }
  
   
  
    userList: OfficeProjectMapping[] = [];
  
  
    getAll() {
      this.apiService.getAll().subscribe((res: any) => {
        this.userList = res;
        console.log(this.userList);
        
      })
    }
  
  
    // newMessage() {
    //   this.apiService.changeMessage("Polin")
    // }
  
    
  
  }

{

}
