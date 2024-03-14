import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectDetailService } from 'src/app/service/ProjectDetail.service';

@Component({
  selector: 'app-pro-dcreate',
  templateUrl: './pro-dcreate.component.html',
  styleUrls: ['./pro-dcreate.component.scss']
})
export class ProDCreateComponent implements OnInit {

  constructor(public apiService: ProjectDetailService, private router: Router, private actiRouter: ActivatedRoute) { }

  ngOnInit(): void {
    // this.actiRouter.params.subscribe(pr =>{
    //   let id=pr["id"];
    //   if(id){
    //     this.apiService.getByID(id).subscribe(a=>{
    //       this.userForm.patchValue(a);
    //     })
    //   }

    // })

  }

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    projectId: new FormControl(''),
    projectAims: new FormControl(''),
    amount: new FormControl(''),
    interestRate: new FormControl(''),
    status: new FormControl()


  });

  data!:any;

  onSubmit() {
    console.log(this.userForm.value)

    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      
      this.router.navigateByUrl('/prod/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      projectId: new FormControl(''),
      projectAims: new FormControl(''),
      amount: new FormControl(''),
      interestRate: new FormControl(''),
      status: new FormControl()
    //   gender: new FormControl(''),
    //   paddress: new FormControl(''),
    // caddress: new FormControl('')

    });
  }
}

