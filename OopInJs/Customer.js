export class Customer{
    get cpf(){
        return this._cpf;
    }

    constructor(name, cpf, password){
        this._name = name;
        this._cpf = cpf;
        this._password = password; 
    }

    authenticate(password){
        return password == this._password;
    }

    get name(){
        return this._name;
    }
}
