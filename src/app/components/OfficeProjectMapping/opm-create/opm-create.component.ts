import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OfficeProjectMappingService } from 'src/app/service/OfficeProjectMapping.Service';
import { OfficeDetailsService } from 'src/app/service/officeDetails.service';
import { ProjectDetailsService } from 'src/app/service/project_details.service';

@Component({
  selector: 'app-opm-create',
  templateUrl: './opm-create.component.html',
  styleUrls: ['./opm-create.component.scss']
})
export class OpmCreateComponent implements OnInit {

  constructor(public apiService: OfficeProjectMappingService, private router: Router, private actiRouter: ActivatedRoute,
    private odService :OfficeDetailsService, private pdService: ProjectDetailsService) { }


  ngOnInit(): void {
    // this.actiRouter.params.subscribe(pr =>{
    //   let id=pr["id"];
    //   if(id){
    //     this.apiService.getByID(id).subscribe(a=>{
    //       this.userForm.patchValue(a);
    //     })
    //   }

    // })
    this.getAllOd();
    this.getAllPd();
  }

 odList: any=[]; 
  getAllOd(){
    this.odService.getAll().subscribe({
      next:res => { 
        this.odList = res;
      },
      error:res=>{
        console.log('Error!!');        
      }
    })    
  }

  pdList: any=[]; 
  getAllPd(){
    this.pdService.getAll().subscribe({
      next:res => { 
        this.pdList = res;
      },
      error:res=>{
        console.log('Error!!');
        
      }
    })
    
  }

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    officeMapName: new FormControl(),
    officeMapId: new FormControl(''),
    status: new FormControl(''),
    officeDetails: new FormControl(),
    projectDetails: new FormControl()
  // caddress: new FormControl('')

  });

  data!:any;

  onSubmit() {
    console.log(this.userForm.value)

    this.userForm.value.officeDetails = {'id': this.userForm.value.officeDetails}
    this.userForm.value.projectDetails = {'id': this.userForm.value.projectDetails}

    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      
      this.router.navigateByUrl('/opm/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      id: new FormControl(),
    officeMapName: new FormControl(),
    officeMapId: new FormControl(''),
    status: new FormControl(''),
    officeDetails: new FormControl(''),
    projectDetails: new FormControl('')
    //   gender: new FormControl(''),
    //   paddress: new FormControl(''),
    // caddress: new FormControl('')

    });
  }
}


