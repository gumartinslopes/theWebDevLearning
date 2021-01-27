import{Employee} from './Employee.js'

export class Director extends Employee{
    constructor(name, salary, cpf){
        super(name, salary, cpf);
        this._bonificacao = 2;
    }

    get name(){
        return this._name;
    }
}