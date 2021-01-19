//transformando uma string em array
let word = 'saas';

console.log(Array.from(word));
if(verifyPalindrome())
    console.log('Eh um palindromo');
else
    console.log('Não eh palindromo');

function verifyPalindrome(){
    var i = 0;
    var j = word.length - 1;
    var result = true;
    
    do{
        if(word[i] !=  word[j]){
            result = false;
        }
        i++;
        j--;
    }while(i < word.length / 2);

    return result;
}