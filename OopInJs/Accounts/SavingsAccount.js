import { Account } from "./Account.js";

export class SavingsAccount extends Account{
    constructor(customer, agency){
        super(0, customer, agency);
    }

    withdraw(value){
        let tax = 1.02;
        return this._withdraw(value, tax);
    }
}