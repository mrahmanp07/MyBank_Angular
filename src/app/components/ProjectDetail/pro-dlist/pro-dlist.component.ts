import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCoaMapping } from 'src/app/model/ProjectCoaMapping';
import { ProjectDetail } from 'src/app/model/ProjectDetail';
import { User } from 'src/app/model/User';
import { ProjectDetailService } from 'src/app/service/ProjectDetail.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-pro-dlist',
  templateUrl: './pro-dlist.component.html',
  styleUrls: ['./pro-dlist.component.scss']
})
export class ProDListComponent implements OnInit {
  // userRole: string;
  
  constructor(public apiService: ProjectDetailService, private route:Router, public authService: AuthService) {
    // this.userRole = localStorage.getItem("role") ?? ""
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
        this.route.navigateByUrl("/pcm/list");
      })
    }
  
    track(index:number,user:ProjectDetail){
      return user.id;
    }
  
  
  
  
    edit(_t14: User) {
    }
  
    ngOnInit(): void {
      // this.authService.isLogin();
      this.getAll();
      // this.getA();
    }
  
   
  
    userList: ProjectDetail[] = [];
  
  
    getAll() {
      this.apiService.getAll().subscribe((res: any) => {
        this.userList = res;
      })
    }
  
  
    // newMessage() {
    //   this.apiService.changeMessage("Polin")
    // }
  
    
  
  }
