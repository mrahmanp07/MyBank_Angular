import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerDetailsService } from 'src/app/service/CustomerDetails.service';
import { CustomerLoanHistoryService } from 'src/app/service/CustomerLoanHistory.service';

@Component({
  selector: 'app-clh-crate',
  templateUrl: './clh-crate.component.html',
  styleUrls: ['./clh-crate.component.scss']
})
export class ClhCrateComponent implements OnInit {

  constructor(public apiService: CustomerLoanHistoryService, private router: Router, private actiRouter: ActivatedRoute,
    private cdService:CustomerDetailsService) { }


    CdList: any=[]; 
  getAllCd(){
    this.cdService.getAll().subscribe({
      next:res => { 
        this.CdList = res;
      },
      error:res=>{
        console.log('Error!!');
        
      }
    })
  }

  ngOnInit(): void {
    this.actiRouter.params.subscribe(pr =>{
      let id=pr["id"];
      if(id){
        this.apiService.getByID(id).subscribe(a=>{
          this.userForm.patchValue(a);
        })
      }

    })
    this.getAllCd();
  }

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    type: new FormControl(),
    amount: new FormControl(''),
    startDate: new FormControl(''),
    LoanTerm: new FormControl(''),
    endDate: new FormControl(''),
    Installments: new FormControl(''),
    RemainingAmount: new FormControl(''),
    status: new FormControl(''),
    projectDetails: new FormControl(''),
    customerDetails: new FormControl('')
  // caddress: new FormControl('')

  });

  data!:any;

  onSubmit() {
    console.log(this.userForm.value)

    this.userForm.value.customerDetails = {'id': this.userForm.value.customerDetails}

    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/clh/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      id: new FormControl(),
      type: new FormControl(),
      amount: new FormControl(''),
      startDate: new FormControl(''),
      LoanTerm: new FormControl(''),
      endDate: new FormControl(''),
      Installments: new FormControl(''),
      RemainingAmount: new FormControl(''),
      status: new FormControl(''),
      projectDetails: new FormControl(''),
      customerDetails: new FormControl('')
    //   gender: new FormControl(''),
    //   paddress: new FormControl(''),
    // caddress: new FormControl('')

    });
  }
}

