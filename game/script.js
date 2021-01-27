var gameScreen = document.getElementById('game');
var player = document.getElementById('player');
var block = document.getElementById('block');


setTimeout(game, 800);


function game(){
    gameScreen.onclick = jump;
    var currentPoints = 0;
    
    var playerAlive = true;
    var checkDeath = setInterval(verifyPlayerDeath, 10); 
    
    renderObstacle();

    function jump() {
        if(player.classList != 'animate-jump')
            player.classList.add('animate-jump'); 
        setTimeout(function(){
            player.classList.remove('animate-jump');
        },500);   
         updateScore();
    }

    function renderObstacle(params) {
        block.style.animation = 'block 1s infinite';
    }

    function verifyPlayerDeath() {
        if(checkCollision(player, block)){
            block.style.display = 'none';
            alert('u luse :(');
            playerAlive = false;
        }       
    }

    function updateScore() {
        if(playerAlive){
            currentPoints++;
            var score = document.getElementById('score');
            score.innerText = currentPoints;
        }
    }

    function  updateHiScore() {
        var hiScore = document.getElementById('hiScore');
        if(currentPoints > parseInt(currentHiScore.innerText)){
            hiScore.innerText = currentPoints;
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
