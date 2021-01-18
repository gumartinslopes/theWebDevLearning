var gameScreen = document.getElementById('game');
var player = document.getElementById('player');
var block = document.getElementById('block');

setTimeout(startGame, 800);

function startGame(){
    gameScreen.onclick = jump;

    var checkDeath = setInterval(verifyPlayerDeath, 10); 

    function jump() {
        if(player.classList != 'animate-jump')
            player.classList.add('animate-jump'); 
        setTimeout(function(){
            player.classList.remove('animate-jump');
        },500);    
    }

    function verifyPlayerDeath() {
        if(checkCollision(player, block)){
            
            block.style.display = 'none';
            alert('u luse :(');
        }        
    }

    function checkCollision(a, b){
        var collided  = false;
        ax = a.getBoundingClientRect().x;
        ay = a.getBoundingClientRect().y;   
        bx = b.getBoundingClientRect().x;
        by = b.getBoundingClientRect().y;
        
        
        if(ax < (bx + b.clientWidth) && (ax + a.clientWidth) > bx &&
        ay < (by + b.clientHeight) && (ay + a.clientHeight) > by){
        collided = true;
        }
        return collided;
    }

}


