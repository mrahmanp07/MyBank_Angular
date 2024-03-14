import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartOfAccountsService } from 'src/app/service/chart-of-accounts.service';
import { PcmService } from 'src/app/service/pcm.service';
import { ProjectDetailsService } from 'src/app/service/project_details.service';

@Component({
  selector: 'app-pcm-create',
  templateUrl: './pcm-create.component.html',
  styleUrls: ['./pcm-create.component.scss']
})
export class PcmCreateComponent implements OnInit {

  constructor(public apiService: PcmService, private router: Router, private actiRouter: ActivatedRoute,
    private pdService: ProjectDetailsService, private coaService:ChartOfAccountsService) { }

  PdList: any=[]; 
  getAllPd(){
    this.pdService.getAll().subscribe({
      next:res => { 
        this.PdList = res;
      },
      error:res=>{
        console.log('Error!!');
        
      }
    })
  }

  CoaList: any=[]; 
  getAllCoa(){
    this.coaService.getAll().subscribe({
      next:res => { 
        this.CoaList = res;
      },
      error:res=>{
        console.log('Error!!');
        
      }
    })
  }

  ngOnInit(): void {
    // this.actiRouter.params.subscribe(pr =>{
    //   let id=pr["id"];
    //   if(id){
    //     this.apiService.getByID(id).subscribe(a=>{
    //       this.userForm.patchValue(a);
    //     })
    //   }

    // })
    this.getAllPd();
    this.getAllCoa();
  }

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    mapId: new FormControl(''),
    projectDetails: new FormControl(''),
    chartOfAccounts: new FormControl()


  });

  data!:any;

  onSubmit() {
    console.log(this.userForm.value)
    this.userForm.value.projectDetails = {'id': this.userForm.value.projectDetails}
    this.userForm.value.chartOfAccounts = {'id': this.userForm.value.chartOfAccounts}

    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      
      this.router.navigateByUrl('/pcm/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      id: new FormControl(),
    name: new FormControl(),
    mapId: new FormControl(''),
    projectDetails: new FormControl(),
    chartOfAccounts: new FormControl()
    //   gender: new FormControl(''),
    //   paddress: new FormControl(''),
    // caddress: new FormControl('')

    });
  }
}

{

}
