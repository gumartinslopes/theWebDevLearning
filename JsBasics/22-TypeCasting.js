let string = '123';
console.log(Number(string));
let number = 45;
console.log(String(number));

console.log(number + 4); //resultado esperado => 49
console.log(string + 4); //resultado esperado => 1234

//contando
let word = 'papibaquigrafo';
console.log(word.length); //resultado esperado => 14
let number2 = 145455;
console.log(number2.length); //resultado esperado => 6, porém receberemos undefined
console.log(String(number2).length);

let number3 = 7878787.45545
console.log(number3.toFixed(2).replace(".", ","));//concertando as casas decimais

  