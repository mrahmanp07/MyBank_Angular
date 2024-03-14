import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ChartOfAccountsService } from 'src/app/service/chart-of-accounts.service';
import { CoaElService } from 'src/app/service/CoaEl.service';


import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-chart-of-accounts-create',
  templateUrl: './chart-of-accounts-create.component.html',
  styleUrls: ['./chart-of-accounts-create.component.scss']
})
export class ChartOfAccountsCreateComponent implements OnInit {

  constructor(public apiService: ChartOfAccountsService, private router: Router, private actiRouter: ActivatedRoute, private coaelService:CoaElService) { }


  ngOnInit(): void {
    // this.actiRouter.params.subscribe(pr =>{
    //   let id=pr["id"];
    //   if(id){
    //     this.apiService.getByID(id).subscribe(a=>{
    //       this.userForm.patchValue(a);
    //     })
    //   }

    // })

    this.getAllCoaEl();
  }

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    coaId: new FormControl(''),
    type: new FormControl(''),
    amount: new FormControl(''),
    status: new FormControl(''),
    coaElements: new FormControl('')
  // caddress: new FormControl('')

  });

  data!:any;

  onSubmit() {
    console.log(this.userForm.value)
    this.userForm.value.coaElements = {'id': this.userForm.value.coaElements}
    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      
      this.router.navigateByUrl('/chartofaccounts/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      id: new FormControl(),
    name: new FormControl(),
    coaId: new FormControl(''),
    type: new FormControl(''),
    amount: new FormControl(''),
    status: new FormControl(''),
    coaElements: new FormControl('')
    //   gender: new FormControl(''),
    //   paddress: new FormControl(''),
    // caddress: new FormControl('')

    });

    

  }


  CoaElList: any=[]; 
  getAllCoaEl(){
    this.coaelService.getAll().subscribe({
      next:res => { 
        this.CoaElList = res;
      },
      error:res=>{
        console.log('Error!!');
        
      }
    })
  }

}

