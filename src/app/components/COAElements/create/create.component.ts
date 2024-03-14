import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CoaElService } from 'src/app/service/CoaEl.service';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-CoaElCreate',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CoaElCreateComponent implements OnInit {

  constructor(public apiService: CoaElService, private router: Router, private actiRouter: ActivatedRoute) { }


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
    orgName: new FormControl(''),
    amount: new FormControl('')
  // caddress: new FormControl('')

  });

  data!:any;

  onSubmit() {
    console.log(this.userForm.value)
    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      
      this.router.navigateByUrl('/coael/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      id: new FormControl(),
    name: new FormControl(),
    elementId: new FormControl(''),
    orgName: new FormControl(''),
    amount: new FormControl('')
    //   gender: new FormControl(''),
    //   paddress: new FormControl(''),
    // caddress: new FormControl('')

    });
  }
}

