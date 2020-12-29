import { Account } from "./Account.js";

export class CurrentAccount extends Account{
    constructor(customer, agency){
        super(0, customer, agency);
    }
    withdraw(value){
        return this._withdraw(value, 1.05);
    }
}