
//usamos o length para encontrar o tamanho da string
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln);

//usamos o indexOf para encontrar o indice onde determinada palavra aparece primeiro
var str = "Please locate where 'locate' occurs!";
var posI = str.indexOf("locate");
console.log(posI);

//usamos o lastIndexOf para encontrar o índice da última ocorrência da palavra
var str = "Please locate where 'locate' occurs!";
var posF = str.lastIndexOf("locate");
console.log(posF);

//usamos o search para procurar uma string dentro de uma string 
var str = "Please locate where locate occurs!";
var pos = str.search("locate");
console.log(pos);

//pegamos determinada parte da string com slice sem alterá-la
var fruits = "Banana, Apple, Grape";
var apple = fruits.slice(8, 13);
console.log(apple); 

//pasando parâmetros negativos a conta é feita do final para o início
var fruits2 = "Apple, Banana, Kiwi";
var banana = fruits2.slice(-12, -6);
console.log(banana);

//utilzando substr para fazer o mesmo trabalho, mas passando o tamanho como parâmetro
var fruits3 = "Apple, Banana, Kiwi";
var kiwi = fruits3.substr(15, 4);
console.log(kiwi);

//replace vai trocar uma determinada parte da string
var phrase = "I'm the king >:[";
var newPhrase = phrase.replace('the king', 'Batman');
console.log(newPhrase);

//trim remove espaços em branco no início e no final da palavra
var word = '                           Ua uauaua ua';
console.log(word.trim());