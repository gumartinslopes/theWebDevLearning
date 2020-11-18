console.log("Trabalhando com atribuicao");
let idade = 45;                       
const primeiroNome = "James";   //consts sao tipos de variaveis por mais que isso seja estranho
const sobrenome = "Bond";

console.log(primeiroNome,sobrenome);
console.log(primeiroNome + " " + sobrenome);

console.log(`The name is ${sobrenome} ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + " " + sobrenome;  //operacao de sobrescrita
console.log(nomeCompleto); 

idade = 27;
idade++;
console.log(idade);