var gameScreen = document.getElementById('game');
var player = document.getElementById('player');
var block = document.getElementById('block');
player.clientHeight;
gameScreen.onclick = jump;
var checkDeath = setInterval(verifyPlayerCollision, 500); 

function verifyPlayerCollision() {
    verifyCollision(player, block);
}
//mecher na colisão depois
function verifyCollision(a, b){
    var ax = a.getBoundingClientRect().y;
    var ay = a.getBoundingClientRect().x;
    var bx = b.getBoundingClientRect().x;
    var by = b.getBoundingClientRect().y;

}

function jump() {
    if(player.classList != 'animate-jump')
        player.classList.add('animate-jump'); 
    setTimeout(function(){
        player.classList.remove('animate-jump');
    },500);    
}