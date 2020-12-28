import {Customer} from "./Customer.js"
import {Account} from "./Account.js"


const customer1 = new Customer('Indiana Jones Jr', '123456789-10');
const account1 = new Account(customer1, '1001');

const customer2 = new Customer('Han Solo', '666666666-66');
const account2 = new Account(customer2, '1001');

console.log(Account.totalNumberOfAccounts);
