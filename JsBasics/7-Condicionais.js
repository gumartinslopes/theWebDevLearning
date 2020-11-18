console.log("Trabalhando com condicionais");
const saoPaulo = "Sao Paulo";
const beloHorizonte = "Belo Horizonte";
const salvador = "Salvador";

const listaDestinos = new Array(
    "Salvador",
    "Sao Paulo",
    "Beagá"
);  //array de destinos


console.log("Destinos possíveis: " + listaDestinos);

listaDestinos.push("Rio de Janeiro");
console.log("Destinos possíveis: " + listaDestinos);


var idadeComprador = 180;
var acompanhado = true;
var passagemComprada = true;

if(idadeComprador > 18){
    console.log("Verificação de idade válida, a compra pode ser feita");
    listaDestinos.splice(1, 1);
}

else if(acompanhado){
    console.log("Verificação de acompanhamento, a compra pode ser feita");
    listaDestinos.splice(1, 1);  
}

else{
    console.log("O comprador é menor de idade e está desacompanhado, a compra não foi efetuada com sucesso");
}

console.log("Embarque: \n");
if((idadeComprador > 18 || acompanhado) && passagemComprada){
    console.log("Boa viagem!");
}
else{
    console.log("Embarque impedido");
}


console.log("Destinos possíveis: " + listaDestinos);
