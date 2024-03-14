import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.scss']
})
export class NavberComponent implements OnInit {
  public sideNav = document.getElementById('sideNav');
  public mainContent = document.querySelector('main');

  constructor(public apiService: RestApiService, private router: Router) { }

  userRole: any;
  username: any;
  
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.userRole = localStorage.getItem("role");
  }

  logOut() {
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      localStorage.removeItem('isLogin');
      this.apiService.changeMessage("false");
      this.router.navigateByUrl('/login');
  }

//    toggleNav() {
//     var sideNav = document.getElementById('sideNav');
//     var mainContent = document.querySelector('main');
    
//     if (sideNav.style.width === '250px') {
//         sideNav.style.width = '0';
//         mainContent.style.marginLeft = '0';
//     } else {
//         sideNav.style.width = '250px';
//         mainContent.style.marginLeft = '250px';
//     }
// }
}
