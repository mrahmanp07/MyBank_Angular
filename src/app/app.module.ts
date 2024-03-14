import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './components/view/view.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavberComponent } from './components/navber/navber.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VoucherdetailsService } from '../app/service/voucherdetails.service';
import { ChartOfAccountslistComponent } from './components/ChartOfAccounts/chart-of-accountslist/chart-of-accountslist.component';
import { ChartOfAccountsCreateComponent } from './components/ChartOfAccounts/chart-of-accounts-create/chart-of-accounts-create.component';
import { CreateComponent } from './create/create.component';
import { CoaElCreateComponent } from './components/COAElements/create/create.component';
import { CoaElListComponent } from './components/COAElements/list/list.component';
import { PcmCreateComponent } from './components/pcm/pcm-create/pcm-create.component';
import { PcmListComponent } from './components/pcm/pcm-list/pcm-list.component';
import { OdCreateComponent } from './components/OfficeDetails/od-create/od-create.component';
import { OdListComponent } from './components/OfficeDetails/od-list/od-list.component';
import { OpmCreateComponent } from './components/OfficeProjectMapping/opm-create/opm-create.component';
import { OpmListComponent } from './components/OfficeProjectMapping/opm-list/opm-list.component';
import { CdCreateComponent } from './components/CustomerDetails/cd-create/cd-create.component';
import { CdListComponent } from './components/CustomerDetails/cd-list/cd-list.component';
import { ClhCrateComponent } from './components/CustomerLoanHistory/clh-crate/clh-crate.component';
import { ClhListComponent } from './components/CustomerLoanHistory/clh-list/clh-list.component';
import { VdCreateComponent } from './components/VoucherDetails/vd-create/vd-create.component';
import { VdListComponent } from './components/VoucherDetails/vd-list/vd-list.component';
import { VmCreateComponent } from './components/VoucherMaster/vm-create/vm-create.component';
import { VmListComponent } from './components/VoucherMaster/vm-list/vm-list.component';
import { PdCreateComponent } from './components/ProjectDetails/pd-create/pd-create.component';
import { ProDCreateComponent } from './components/ProjectDetail/pro-dcreate/pro-dcreate.component';
import { ProDListComponent } from './components/ProjectDetail/pro-dlist/pro-dlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    ViewComponent,
    LoginComponent,
    SignUpComponent,
    NavberComponent,
    ProfileComponent,
    ChartOfAccountslistComponent,
    ChartOfAccountsCreateComponent,
    CoaElCreateComponent,
    CoaElListComponent,
    PcmCreateComponent,
    PcmListComponent,
    OdCreateComponent,
    OdListComponent,
    OpmCreateComponent,
    OpmListComponent,
    CdCreateComponent,
    CdListComponent,
    ClhCrateComponent,
    ClhListComponent,
    VdCreateComponent,
    VdListComponent,
    VmCreateComponent,
    VmListComponent,
    PdCreateComponent,
    ProDCreateComponent,
    ProDListComponent,
    DashboardComponent,


    // VoucherdetailsService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
