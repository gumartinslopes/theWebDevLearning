var player1 = {
    health: 100,
    mana: 100,
    stamina: 100,
    name: 'Joe',
    currentDamage: 20,
    
    attack: function(receiver){
        this.say('Take this');
        receiver.recieveDamage(this.currentDamage);
    },
    
    recieveDamage: function (damageTaken){
        this.say('outch');
        this.health -= damageTaken;
    },

    say: function(message){
        console.log(`${this.name} says : ${message}! \n \n `)
    },
}

//metodo do Briam Huisman
function copiarObj(original) {
    var copia = (original instanceof Array) ? [] : {}; // verificando se é um array ou um objeto 'comum' e instanciando a cópia
    for (i in original) { // iterando cada propriedade do objeto original
      if (original[i] && typeof original[i] == 'object') copia[i] = copiarObj(original[i]); // se for um objeto realiza cópia desse objeto (note a recursividade aqui)
      else copia[i] = original[i]; // se não simplesmente copia o valor
    }
    return copia; // retorna a cópia
};


var evilClone = copiarObj(player1);
evilClone.name = 'Evil Clone';


player1.attack(evilClone);
console.log('enemy hp: ' + evilClone.health);









// arrayTeste = [
//     1,
//     2,
//     3,
//     4
// ]
//var player2 = copiarObj(arrayTeste);              //descomentando aqui temos a funcionalidade do método de copiar um array
//console.log(player2);