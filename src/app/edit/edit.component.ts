import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../service/rest-api.service';
import { User } from '../model/User';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(public apiService: RestApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  id!: any;
  userData!: User;


  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    this.getDataById(this.id);
  }

  getDataById(id: any){
    this .apiService.getByID(id).subscribe((v: any) => {
      this.userData = v;
      this.userForm.setValue(this.userData);
    })
  }


  onSubmit() {
    this.apiService.updateData(this.userForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/list');
    })
  }

  

  userForm: FormGroup = new FormGroup({
    id: new FormControl(this.id),
    fullname: new FormControl(''),
    mail: new FormControl(),
    phone: new FormControl(''),
    date: new FormControl(''),
    gender: new FormControl(''),
    paddress: new FormControl(''),
    caddress: new FormControl('')
  });






}
