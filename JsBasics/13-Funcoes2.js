//function expression(parameters)
const sum = function(value1, value2){
    return(value1 + value2);
}
function fazerSuco(fruta1, fruta2){
    return fruta1 + ' e ' + fruta2;
}

let number1 = 15;
let number2 = 59;

console.log(`O primeiro valor é ${number1}`);
console.log(`O segundo valor é ${number2}`);
console.log(`A soma dos dois valores é ${sum(number1,number2)}`);

const copo = fazerSuco('banana', 'maçã');
console.log('No copo temos uma mistura de ' + copo);
