import { Customer } from "./Customer.js";
import { Director } from "./Employees/Director.js"
import { Manager } from "./Employees/Manager.js"
import { AuthenticationSystem } from "./AuthenticationSystem.js"

const director1 = new Director('Michael Scott', 10000, "123456789");
const manager1 = new Manager('Dwight Shrute', 6000, "12345678");
const customer1 = new Customer('Arnold Shwarzenegger', "12345");

director1.registerPassword(123456);
manager1.registerPassword(123);

const customer1Login = AuthenticationSystem.login(customer1, "12345")
const director1Login = AuthenticationSystem.login(director1, "123456");
const manager1Login = AuthenticationSystem.login(manager1, "123456789");

console.log(customer1Login, director1Login, manager1Login)
