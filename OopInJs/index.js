import {Customer} from "./Customer.js"
import {Account} from "./Account.js"

const customer1 = new Customer();
customer1.name = 'Indiana Jones';
customer1.cpf = '12345678';

const account1 = new Account();
account1.agency = '1001';
account1.customer = customer1;
account1.city = 'New York';


const customer2 = new Customer();
customer2.name = 'Han Solo';
customer2.cpf = '0000001'; 

const account2 = new Account();
account2.agency = '1001';
account2.customer = customer2;
account2.city = 'Coruscant';

account1.deposit(300);
let transferValue = 200;
account1.transfer(transferValue, account2);

console.log(`\nSaldo da conta 1 : ${account1._balance},
saldo da conta 2 : ${account2._balance}`);
