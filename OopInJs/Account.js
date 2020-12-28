import { Customer } from "./Customer.js";

export class Account{
    agency;
    city;

    _customer;
    _balance = 0;

    set customer(newValue){
        if(newValue instanceof Customer){
            this._customer = newValue;
        }
    }
    get customer(){
        return this._customer;
    }
    
    get balance(){
        return this._balance;
    }

    constructor(customer, agency){
        this.customer = customer;   //aqui utilizamos o acessor de customer
        this.agency = agency;
        this.totalNumberOfAccounts++;
    }
    
    deposit(value){
        if(value >= 0){
            this._balance += value;
            console.log(` \$${value}.00 deposited successfully`);
        }  
        else {
            console.log('Invalid deposit');
        }
    }

    withdraw(value) {
        if(this._balance >= value){
            this._balance -= value;
            console.log(` \$${value}.00 successfully withdrawn}`);
            return value;
        }    
        else{
            console.log('Insufficient money');
        }
    }

    transfer(value, account){
        const withdrawValue = this.withdraw(value);
        account.deposit(withdrawValue);
    }
}
