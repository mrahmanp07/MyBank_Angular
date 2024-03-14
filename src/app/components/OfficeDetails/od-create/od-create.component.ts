import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeDetailsService } from 'src/app/service/officeDetails.service';

@Component({
  selector: 'app-od-create',
  templateUrl: './od-create.component.html',
  styleUrls: ['./od-create.component.scss']
})
export class OdCreateComponent implements OnInit {

  constructor(public apiService: OfficeDetailsService, private router: Router, private actiRouter: ActivatedRoute) { }


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
    address: new FormControl(''),
    type: new FormControl(''),
    status: new FormControl(''),
  // caddress: new FormControl('')

  });

  data!:any;

  onSubmit() {
    console.log(this.userForm.value)
    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      
      this.router.navigateByUrl('/officeDetails/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      address: new FormControl(''),
      type: new FormControl(''),
      status: new FormControl(''),
    //   gender: new FormControl(''),
    //   paddress: new FormControl(''),
    // caddress: new FormControl('')

    });
  }
}

