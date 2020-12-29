export class Character{

    constructor(name, ruppes, hp){
        this._name = name;
        this._ruppes = ruppes;
        this._hp = hp;
    }
    get hp(){
        return this._hp;
    }

    walk(){
        console.log('walking');
    }

    talk(character){
        var message = 'Hello'
        console.log(`${this._name} says ${message} to ${character._name}.`);
    }

    attack(){
        
    }

    defend(){

    }
}