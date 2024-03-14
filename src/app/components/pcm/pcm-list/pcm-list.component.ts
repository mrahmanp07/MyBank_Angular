import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCoaMapping } from 'src/app/model/ProjectCoaMapping';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { PcmService } from 'src/app/service/pcm.service';

@Component({
  selector: 'app-pcm-list',
  templateUrl: './pcm-list.component.html',
  styleUrls: ['./pcm-list.component.scss']
})
export class PcmListComponent implements OnInit {
  // userRole: string;
  
  constructor(public apiService: PcmService, private route:Router, public authService: AuthService) {
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
  
    track(index:number,user:ProjectCoaMapping){
      return user.id;
    }
  
  
  
  
    edit(_t14: User) {
    }
  
    ngOnInit(): void {
      // this.authService.isLogin();
      this.getAll();
      // this.getA();
    }
  
   
  
    userList: ProjectCoaMapping[] = [];
  
  
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

