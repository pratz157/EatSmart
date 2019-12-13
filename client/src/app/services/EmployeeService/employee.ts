export  interface IEmployee{
    empId : number,
    empName : String,
    empMail : String,
    empPassword : String,
    isVendor : boolean
}

export  interface IEmp{

    empMail : String,
    empPassword : String,
}

export interface Auth{
    authorised : boolean
}