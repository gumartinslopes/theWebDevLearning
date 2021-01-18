import { Customer } from "../Customer.js";

export class Account{
    static totalNumberOfAccounts = 0;
    constructor(initialBalance, customer, agency){
        if(this.constructor == Account){
            throw new Error("Você não deveria instanciar a classe Account diretamente, pois essa é uma classe abstrata");
        }

        this.customer = customer;   //aqui utilizamos o acessor de customer
        this.agency = agency;
        this._balance = initialBalance;
        
        Account.totalNumberOfAccounts += 1;
    }
    
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

    deposit(value){
        if(value >= 0){
            this._balance += value;
            console.log(` \$${value} deposited successfully`);
        }  
        else {
            console.log('Invalid deposit');
        }
    }

    //abstract method
    withdraw(value){
        throw new Error("withdraw is an abstract method this shouldn't be caled");
    }
    _withdraw(value, tax) {

        if(this._balance >= value){
            this._balance -= value;
            console.log(`\$${value / tax} successfully withdrawn`);
            return value / tax;
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
