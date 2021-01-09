var canvas = document.querySelector('canvas');	//pegamos o canvas do html
canvas.width = 	window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

//retângulos
//context.fillRect(x, y, width, height);
context.fillStyle = 'rgba(255, 0, 0, 0.4)';

context.fillRect(100, 100, 100, 100);
context.fillStyle = 'rgba(0, 255, 0, 0.4)';
context.fillRect(400, 100, 100, 100);
context.fillStyle = 'rgba(0, 0, 255, 0.4)';
context.fillRect(300, 300, 100, 100);

//linha
context.beginPath();		//inicia-se um caminho 
context.moveTo(50, 300);	//local de início
context.lineTo(300, 100);	//local de fim
context.lineTo(400, 300);
context.strokeStyle = '#fa34a3';	
context.stroke();			//desenho

// Circulos ou arcos
for(var i = 0; i < 3; i++){
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	
	context.beginPath();
	context.arc(x, y, 30, 0, Math.PI * 2, false);
	context.stroke();
}

