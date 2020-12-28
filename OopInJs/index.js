import {Customer} from "./Customer.js"
import {Account} from "./Account.js"



const customer1 = new Customer('Indiana Jones Jr', '123456789-10');
const account1 = new Account(customer1, '1001');

const savingAccount1 = new SavingsAccount(50, customer1, '1001');
console.log(savingAccount1);
console.log(Account.totalNumberOfAccounts);
