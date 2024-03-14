import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectDetailsService } from 'src/app/service/project_details.service';

@Component({
  selector: 'app-pd-create',
  templateUrl: './pd-create.component.html',
  styleUrls: ['./pd-create.component.scss']
})
export class PdCreateComponent implements OnInit {

  constructor(public apiService: ProjectDetailsService, private router: Router, private actiRouter: ActivatedRoute) { }


  ngOnInit(): void {
    
  }

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    projectId: new FormControl(''),
    projectAims: new FormControl(''),
    status: new FormControl('')
    // status: new FormControl(''),
    // coaElementsId: new FormControl('')
  // caddress: new FormControl('')

  });

  data!:any;

  onSubmit() {
    console.log(this.userForm.value)
    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      
      this.router.navigateByUrl('/pd/list');
    });
  }

  // clear() {
  //   this.userForm = new FormGroup({
  //     id: new FormControl(),
  //   name: new FormControl(),
  //   projectId: new FormControl(''),
  //   projectAims: new FormControl(''),
  //   status: new FormControl('')

  //   });
  // }
}

