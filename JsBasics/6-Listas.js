console.log("Trabalhando com listas");
const saoPaulo = "Sao Paulo";
const beloHorizonte = "Belo Horizonte";
const salvador = "Salvador";

const listaDestinos = new Array(
    "Salvador",
    "Sao Paulo",
    "Beagá"
);  //array de destinos


console.log("Destinos possíveis");
console.log(listaDestinos);

listaDestinos.push("Rio de Janeiro");//adicionamos mais um elemento com push
console.log(listaDestinos);

//(posicao de inicio do splice, quatidade a serem removidos)
listaDestinos.splice(0, 2);   //removemos um item da lista     
listaDestinos.push("Rio Branco");     
console.log("Eu moro em ", listaDestinos[0]);

console.log(listaDestinos);