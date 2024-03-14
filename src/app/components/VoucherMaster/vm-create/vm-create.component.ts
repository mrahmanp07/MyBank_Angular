import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VoucherMasterService } from 'src/app/service/VoucherMaster.service';
import { VoucherdetailsService } from 'src/app/service/voucherdetails.service';

@Component({
  selector: 'app-vm-create',
  templateUrl: './vm-create.component.html',
  styleUrls: ['./vm-create.component.scss']
})
export class VmCreateComponent implements OnInit {

  constructor(public apiService: VoucherMasterService, private router: Router, private actiRouter: ActivatedRoute) { }


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
    officeId: new FormControl(),
    amount: new FormControl(''),
    remark: new FormControl(''),
    officeType: new FormControl(''),
    date: new FormControl(''),
    voucherDetails: new FormControl('')


  });

  data!:any;

  onSubmit() {
    console.log(this.userForm.value)
    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      
      this.router.navigateByUrl('/vm/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      id: new FormControl(),
    officeId: new FormControl(),
    amount: new FormControl(''),
    remark: new FormControl(''),
    officeType: new FormControl(''),
    date: new FormControl(''),
    voucherDetails: new FormControl('')

    });
  }
}


