export class CustomerLoanHistory{
    constructor(
    public id?:number,
    public type?:string,
    public amount?:number , 
    public startDate?:Date,
    public LoanTerm?:number,

    public endDate?:Date,
    public Installments?:number,
    public RemainingAmount?:number,
    public status?:string,
    public projectDetails?:any,
    public customerDetails?:any

    ){}
 }