
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChartOfAccountsCreateComponent } from './components/ChartOfAccounts/chart-of-accounts-create/chart-of-accounts-create.component';
import { ChartOfAccountslistComponent } from './components/ChartOfAccounts/chart-of-accountslist/chart-of-accountslist.component';
import { CoaElCreateComponent } from './components/COAElements/create/create.component';
import { CoaElListComponent } from './components/COAElements/list/list.component';
import { PcmCreateComponent } from './components/pcm/pcm-create/pcm-create.component';
import { OdCreateComponent } from './components/OfficeDetails/od-create/od-create.component';
import { OdListComponent } from './components/OfficeDetails/od-list/od-list.component';
import { VmListComponent } from './components/VoucherMaster/vm-list/vm-list.component';
import { VmCreateComponent } from './components/VoucherMaster/vm-create/vm-create.component';
import { VdListComponent } from './components/VoucherDetails/vd-list/vd-list.component';
import { VdCreateComponent } from './components/VoucherDetails/vd-create/vd-create.component';
import { ClhListComponent } from './components/CustomerLoanHistory/clh-list/clh-list.component';
import { ClhCrateComponent } from './components/CustomerLoanHistory/clh-crate/clh-crate.component';
import { CdListComponent } from './components/CustomerDetails/cd-list/cd-list.component';
import { CdCreateComponent } from './components/CustomerDetails/cd-create/cd-create.component';
import { OpmListComponent } from './components/OfficeProjectMapping/opm-list/opm-list.component';
import { OpmCreateComponent } from './components/OfficeProjectMapping/opm-create/opm-create.component';
import { PcmListComponent } from './components/pcm/pcm-list/pcm-list.component';
import { PdCreateComponent } from './components/ProjectDetails/pd-create/pd-create.component';
import { PdListComponent } from './components/ProjectDetails/pd-list/pd-list.component';
import { ProDCreateComponent } from './components/ProjectDetail/pro-dcreate/pro-dcreate.component';
import { ProDListComponent } from './components/ProjectDetail/pro-dlist/pro-dlist.component';



const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},

  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'list', component: ListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: CreateComponent },
  { path: 'add/:id', component: CreateComponent },
  { path: 'edit/:userId', component: EditComponent },
  { path: 'profile/:userId', component: ProfileComponent},
  { path: 'chartofaccounts/create', component: ChartOfAccountsCreateComponent},
  { path: 'chartofaccounts/list', component: ChartOfAccountslistComponent},
  { path: 'coael/create', component: CoaElCreateComponent},
  { path: 'coael/list', component: CoaElListComponent},
  { path: 'pd/create', component: PdCreateComponent},
  { path: 'pd/list', component: PdListComponent},

  { path: 'prod/create', component: ProDCreateComponent},
  { path: 'prod/list', component: ProDListComponent},
  { path: 'pcm/create', component: PcmCreateComponent},
  { path: 'pcm/list', component: PcmListComponent},
  { path: 'officeDetails/create', component: OdCreateComponent},
  { path: 'officeDetails/list', component: OdListComponent},
  { path: 'opm/create', component: OpmCreateComponent},
  { path: 'opm/list', component: OpmListComponent},
  { path: 'cd/create', component: CdCreateComponent},
  { path: 'cd/list', component: CdListComponent},
  { path: 'clh/create', component: ClhCrateComponent},
  { path: 'clh/list', component: ClhListComponent},
  { path: 'vd/create', component: VdCreateComponent},
  { path: 'vd/list', component: VdListComponent},
  { path: 'vm/create', component: VmCreateComponent},
  { path: 'vm/list', component: VmListComponent},
  { path: 'abc', component: PdCreateComponent},

  // { path: '**', component: HomeComponent },
  // { path: 'post/:postId/view', component: ViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
