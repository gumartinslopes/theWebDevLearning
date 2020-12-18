function Person(name, age) {
    this.name = name;
    this.age = age;
    this.walk = () => {
        return this.name + ' está andando';
    }
}
//funcao que cria o objeto person
const maik = new Person('Mayk', 19); 
const jhon = new Person('Jhon', 25);

console.log(maik.walk());
console.log(jhon.walk());