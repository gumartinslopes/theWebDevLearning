console.log("Travalhando com vaiáveis");

//by the way nao declare variaveis assim
idade = 9;
Idade = 40;
console.log(Idade + " é diferente de " + idade + ", isso porque Js é case sensitive");

const age = 30;
const name = "Jhon";
let ano = 2020;


var x = 2;
function f(){
    var x = y = 1; // x é declarado localmente,y não é!
    console.log("Ess é o x de dentro " + x);
}
f();
console.log(`Esse é o x de fora -> ${x} e o y vazou o escopo -> ${y}`); // 0, 1