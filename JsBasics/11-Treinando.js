var userName = "Maik";
let age = 20;
let isHuman = true;

console.log(typeof userName);
console.log(typeof age);
console.log(typeof isHuman);
console.log(`${userName} tem ${age} anos`);

if(isHuman){
    console.log("E é humano");
}
else {
    console.log("E não é humano");
}

const person = {
    name: 'Homer Simpson',
    age: 39,
    sex: 'M',
    isEmployee: true,
    adress: '632 - Evergreen Terrace'
}
console.log(`\n${person.name} is ${person.age} years old, and lives in ${person.adress}.`);

const employeesNames = [
    'Homer',
    'Lenny',
    'Carl'
]
console.log('\nThis are the current employees from Mr Burn\'s nuclear power plant:');
for(var i = 0; i < employeesNames.length; i++){
    console.log(' * ' + employeesNames[i]);
}

/*--------------Exercicios---------- */
//1 - declare uma variável weight
var weight;

// 2 - qual o tipo de weight?
console.log(typeof weight);

//declare e atribua name, age, stars  e isSubscribed
/* let name = "Jhon";
let age = 25;
let stars = 4.5;
let isSubscribed = true; */

// 4 - crie um array de estudantes 
let student1 = {
    name: "Greg",
    age: 18,
    isAproved: false,
}
const student2 = {
    name: 'Jhon',
    age: 15,
    isAproved: true,
};
let students = [
    student1,
    student2,
];
console.log(students);