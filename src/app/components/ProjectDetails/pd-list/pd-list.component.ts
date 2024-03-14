import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDetails } from 'src/app/model/Project_Details';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { ProjectDetailsService } from 'src/app/service/project_details.service';

@Component({
  selector: 'app-pd-list',
  templateUrl: './pd-list.component.html',
  styleUrls: ['./pd-list.component.scss']
})
export class PdListComponent implements OnInit {
  // userRole: string;
  
  constructor(public apiService: ProjectDetailsService, private route:Router, public authService: AuthService) {
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
        // this.route.navigateByUrl("/pd/list");
      })
    }
  
    track(index:number,user:ProjectDetails){
      return user.id;
    }
  
  
  
  
    edit(_t14: User) {
    }
  
    ngOnInit(): void {
      // this.authService.isLogin();
      this.apiService.getAll().subscribe((res: any) => {
        
        this.userList = res;
        console.log('---List----------',this.userList );

      })      // this.getA();
    }
  
   
  
    userList: any[] = [];
  
  
    getAll() {
      this.apiService.getAll().subscribe((res: any) => {
        this.userList.push(res) ;
        console.log('---List----------', this.userList[0].id );

      })
    }
  
  
    // newMessage() {
    //   this.apiService.changeMessage("Polin")
    // }
  
    
  
  }
   

