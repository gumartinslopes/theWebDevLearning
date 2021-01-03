import { Customer } from "./Customer.js";
import { CurrentAccount } from "./CurrentAccount.js";
import { SavingsAccount } from "./SavingsAccount.js";
import { SalaryAccount } from "./SalaryAccount.js"



const customer1 = new Customer('Indiana Jones Jr', '123456789-10');
const currentAccount1 = new CurrentAccount(customer1, '1001');
const salaryAccount1 = new SalaryAccount(customer1);
const savingAccount1 = new SavingsAccount(customer1, '1001');

savingAccount1.deposit(500);

savingAccount1.withdraw(100);

console.log(savingAccount1._balance);