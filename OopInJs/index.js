import { Customer } from "./Customer.js";
import { Director } from "./Employees/Director.js"
import { Manager } from "./Employees/Manager.js"
import { AuthenticationSystem } from "./AuthenticationSystem.js"

const director1 = new Director('Michael Scott', 123456789100, "123");
const manager1 = new Manager('Dwight Shrute', 66666666666, "123");
const customer1 = new Customer('Arnold Shwarzenegger',77777777777, "123");

director1.registerPassword(123);
manager1.registerPassword(123);

const customer1Login = AuthenticationSystem.login(customer1, "123");
const director1Login = AuthenticationSystem.login(director1, "123");
const manager1Login = AuthenticationSystem.login(manager1, "1234");


salute(director1, director1Login);
salute(customer1, customer1Login);
salute(manager1, manager1Login);


function salute(user,login) {
    if(login){
        console.log(`Hello ${user.name}, welcome to the ByteBank!`);
    }
    else{
        console.log('Sorry, your password or your username is incorrect');
    }
}

console.log(customer1Login, director1Login, manager1Login)
