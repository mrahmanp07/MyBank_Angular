import { VoucherDetails } from "./VoucherDetails";

export class VoucherMaster{
    constructor(
    public id?:number,
    public officeId?:number,
    public amount?:string,
    public remark?:string , 
    public officeType?:string,
    public date?:Date,
    public voucherDetailsId?:VoucherDetails,

    ){}
 }