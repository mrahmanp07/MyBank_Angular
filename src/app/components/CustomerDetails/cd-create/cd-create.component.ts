import { CustomerDetails } from './../../../model/CustomerDetails';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerDetailsService } from 'src/app/service/CustomerDetails.service';
import { OfficeDetailsService } from 'src/app/service/officeDetails.service';

@Component({
  selector: 'app-cd-create',
  templateUrl: './cd-create.component.html',
  styleUrls: ['./cd-create.component.scss']
})
export class CdCreateComponent implements OnInit {

  constructor(public apiService: CustomerDetailsService, private router: Router, private actiRouter: ActivatedRoute,
    private odService:OfficeDetailsService) { }


  ngOnInit(): void {
    this.actiRouter.params.subscribe(pr =>{
      let id=pr["id"];
      console.log(pr);
      
      if(id){
        this.apiService.getByID(id).subscribe(a=>{
          this.userForm.patchValue(a);
          console.log(a);
          
        })
      }

    })
    this.getAllOd();
  }

  OdList: any=[]; 
  getAllOd(){
    this.odService.getAll().subscribe({
      next:res => { 
        this.OdList = res;
      },
      error:res=>{
        console.log('Error!!');
        
      }
    })
  }

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(''),
    customerFullDetails: new FormControl(''),
    type: new FormControl(''),
    status: new FormControl(''),
    officeDetails: new FormControl()

  });

  data!:any;

  onSubmit() {
    console.log(this.userForm.value)

    this.userForm.value.officeDetails = {'id': this.userForm.value.officeDetails}
    // this.userForm.value.CustomerDetails = {'id': this.userForm.value.CustomerDetails}

    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      console.log('--------------------------success-----------------------------');
      
      this.router.navigateByUrl('/cd/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(''),
    customerFullDetails: new FormControl(''),
    type: new FormControl(''),
    status: new FormControl(''),
    officeDetails: new FormControl('')
    //   gender: new FormControl(''),
    //   paddress: new FormControl(''),
    // caddress: new FormControl('')

    });
  }
}


