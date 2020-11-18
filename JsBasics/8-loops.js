console.log("Trabalhando com loops");
const saoPaulo = "Sao Paulo";
const beloHorizonte = "Belo Horizonte";
const salvador = "Salvador";

const listaDestinos = new Array(
    "Salvador",
    "Sao Paulo",
    "Beagá"
);  


console.log("Destinos possíveis: " + listaDestinos);

listaDestinos.push("Rio de Janeiro");
console.log("Destinos possíveis: " + listaDestinos);


var idadeComprador = 180;
let acompanhado = true;
let passagemComprada = false;
const destino = "Salvador";

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

console.log("\nEmbarque: ");
if((idadeComprador > 18 || acompanhado) && passagemComprada){
    console.log("Boa viagem!");
}
else{
    console.log("Embarque impedido");
}


console.log("Destinos possíveis: " + listaDestinos);
