var element = document.getElementById('message');

var value1 = document.getElementById('value1');
var value2 = document.getElementById('value2');
var result = document.getElementById('operationResult');
var operationButton = document.getElementById('button-operate');

function updateMessage(){
    let newMessage = "Olá amigo";
    element.textContent = newMessage;
}

function writeMessage(message){
    document.write(message);
}

function calculate(){
    let sum = parseInt(value1.value) +parseInt( value2.value);
    result.textContent = sum;
}

function calculateArea(width, heigth){
    return (width * heigth);
}

element.onclick = updateMessage;
operationButton.onclick = calculate;
writeMessage("Hello World");

var areaWallOne = calculateArea(100, 15);
var areaWallTwo = calculateArea(150, 78);
console.log(`O valor da área da primeira parede é ${areaWallOne} e a da segunda é ${areaWallTwo}`)