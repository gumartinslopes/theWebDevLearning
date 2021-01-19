let techs = ['js', 'HTML', 'css', 'kotlin', 'java'];
console.log(techs)
// 1 -adicionar um item no fim do array
techs.push('nodeJs');
//adicionar um item no inicio do array
techs.unshift('TypeScript');
console.log(techs)
//2 - retirar o ultimo valor do array
techs.pop();
console.log(techs)
//3  - retirar o primeiro valor do array
techs.shift();
console.log(techs);
//4 - retornamos os elementos sem alterar o array
console.log(techs.slice(1, 3));
console.log(techs);
//5 - buscar um elemento do array
let index = techs.indexOf('css');
//6 - remover um ou mais elementos do array
techs.splice(index, 2);
console.log(techs);