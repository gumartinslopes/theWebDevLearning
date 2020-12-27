import {Customer} from "./Customer.js"
import {Account} from "./Account.js"

const customer1 = new Customer();
customer1.name = 'Indiana Jones';

const account1 = new Account();
account1.agency = '1001';

account1.deposit(1000);

console.log(account1.withdraw(150));
account1.withdraw(30000);
console.log(account1);




