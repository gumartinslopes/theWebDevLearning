class Customer{
    name;
    cpf;
}

class Account{
    agency;
    balance = 0;
    
    deposit(value){
        if(value >= 0){
            this.balance += value;
            console.log('money deposited successfully');
        }  
        else {
            console.log('Invalid deposit');
        }
    }
    withdraw(value) {
        if(this.balance >= value){
            this.balance -= value;
            console.log('Money successfully withdrawn');
        }    
        else{
            console.log('Insufficient money');
        }
    }
}

const account1 = new Account();

account1.deposit(1000);

account1.withdraw(150);
console.log(account1.balance);
account1.withdraw(30000);




