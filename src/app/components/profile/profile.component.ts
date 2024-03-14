import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {



  constructor(public apiService: RestApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  id!: any;
  user!: User;

ngOnInit(): void {
  this.id = this.route.snapshot.params['userId'];
  this.getDataById(this.id);
}

getDataById(id: any){
  this .apiService.getByID(id).subscribe((v: any) => {
    this.user = v;
    // this.userForm.setValue(this.userData);
  })
}

}
