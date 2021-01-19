var nomes;
nomes = ['Jhon','Bob', 'Greg', 'Howard', 'Homer'];
var cores = new Array('blue', 'white', 'black', 'yellow');  /*criando arrays a partir de um construtor */
console.log("Lista de nomes");
for(var i = 0; i < nomes.length; i++){
    console.log(`${i} - ${nomes[i]}`);
}
console.log(cores);

colors = [
    'red',
    'green',
    'blue'
];
    
console.log('the sky is ' + colors[2]);
console.log(`We have ${colors.length} on the colors array`);
//criando arrays com construtores
var weekDays = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday','Friday','Saturday');
showDays(7);
console.log(typeof('Jhon'));
function showDays(max){
    console.log(`the days of the week are:`);
    for(var i = 0; i < max;i++){
        console.log(weekDays[i] + ', \n');
    }
}