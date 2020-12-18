//Function hoisting
//a função pode ser chamada tanto antes
sayMyName('Heisenberg');

function sayMyName(word){
    var name  = 'Heisenberg';
    if(word === name){
        console.log("You're goddam right");
    }
    else{
        console.log('You\'re goddam wrong');
    }
}
//como depois
sayMyName('Jhon');