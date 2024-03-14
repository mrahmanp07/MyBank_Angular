import { ChartOfAccounts } from "./ChartOfAccounts";
import { ProjectDetails } from "./Project_Details";
import { VoucherMaster } from "./VoucherMaster";
import { OfficeDetails } from "./officeDetails";

export class VoucherDetails{
    constructor(
    public id?:number,
    public officeDetails?:any,
    public projectDetails?:any , 
    public chartOfAccounts?:any,
    public fromCoaId?:number,
    public debit?:number,
    public credit?:number , 
    public particular?:string,
    public date?:Date,
    public voucherMaster?:VoucherMaster,

    ){}
 }