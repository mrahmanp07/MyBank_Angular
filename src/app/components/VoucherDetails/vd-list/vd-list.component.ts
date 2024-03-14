import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VoucherdetailsService } from 'src/app/service/voucherdetails.service';

@Component({
  selector: 'app-vd-list',
  templateUrl: './vd-list.component.html',
  styleUrls: ['./vd-list.component.scss']
})
export class VdListComponent implements OnInit {

  constructor(public apiService: VoucherdetailsService, private router: Router, private actiRouter: ActivatedRoute) { }


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
    officeDetails: new FormControl(),
    projectDetails: new FormControl(''),
    chartOfAccounts: new FormControl(''),
    fromCoaId: new FormControl(''),
    debit: new FormControl(''),
    credit: new FormControl(''),
    particular: new FormControl(''),
    date: new FormControl(''),
    voucherMaster: new FormControl('')
  // caddress: new FormControl('')

  });

  data!:any;

  onSubmit() {
    console.log(this.userForm.value)
    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      
      this.router.navigateByUrl('/vd/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      id: new FormControl(),
    officeDetails: new FormControl(),
    projectDetails: new FormControl(''),
    chartOfAccounts: new FormControl(''),
    fromCoaId: new FormControl(''),
    debit: new FormControl(''),
    credit: new FormControl(''),
    particular: new FormControl(''),
    date: new FormControl(''),
    voucherMaster: new FormControl('')

    });
  }
}

{

}
