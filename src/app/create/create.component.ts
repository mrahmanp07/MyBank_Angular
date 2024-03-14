import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { RestApiService } from '../service/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(public apiService: RestApiService, private router: Router, private actiRouter: ActivatedRoute) { }


  ngOnInit(): void {
    this.actiRouter.params.subscribe(pr =>{
      let id=pr["id"];
      if(id){
        this.apiService.getByID(id).subscribe(a=>{
          this.userForm.patchValue(a);
        })
      }

    })
  }

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    elementId: new FormControl(''),
    orgName: new FormControl('')
  //   gender: new FormControl(''),
  //   paddress: new FormControl(''),
  // caddress: new FormControl('')

  });

  data!:any;

  onSubmit() {console.log(this.userForm.value)
    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      console.log(res);
      this.router.navigateByUrl('/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      elementId: new FormControl(''),
      orgName: new FormControl('')
    //   gender: new FormControl(''),
    //   paddress: new FormControl(''),
    // caddress: new FormControl('')

    });
  }
}
