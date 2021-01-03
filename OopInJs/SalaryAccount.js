import { Account } from "./Account.js"

export class SalaryAccount extends Account{
    constructor(customer){
        super(0, this.customer, 1001);
    }

    withdraw(value){
        const tax  = 1.01;
        return this._withdraw(value, tax);
    }
}