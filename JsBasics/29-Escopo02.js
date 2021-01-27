(function(){
    console.log("less is more");
//  number = 7;      esse tipo de declaração gera uma variável global
    var number = 7      //já esse encapsula a variável na função
})();

//console.log(number);

var GLOBALCAR = (function() {
    console.log("less is more!");

    // criando o objeto (vazio) box
    var box = {};

    // adicionando a propriedade queue (fila)
    box.queue = [];

    // adicionando o métodos addItem (adicionar item)
    box.addItem = function(car) {
        return box.queue.push(car);
    };

    // adicionando o métodos getQueue (recuperar fila)
    box.getQueue = function() {
        return box.queue.join(", ");
    };

    // retornando um objeto personalizado (só com o necessário)
    return {
        add: box.addItem,
        get: box.getQueue,
    };
})();

GLOBALCAR.add('Palio');
GLOBALCAR.add('UNO');
GLOBALCAR.add('Fiesta');
console.log(GLOBALCAR.get());


