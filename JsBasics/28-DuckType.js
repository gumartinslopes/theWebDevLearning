//com o duck type a operação pode ser tanto uma soma, quanto uma concatenação
function operate(a, b,c){
    return a + b+ c;
}

console.log(operate(1,2,3));
console.log(operate([1,2,3], [4,5,6],[7,8,9]));
console.log(operate('VUC','VUC', 'VUC'));

