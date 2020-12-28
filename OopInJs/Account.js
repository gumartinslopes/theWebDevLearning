export class Account{
    customer;
    agency;
    city;


    _balance = 0; 
    
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
