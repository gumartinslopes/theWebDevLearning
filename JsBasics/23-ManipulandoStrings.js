var phrase = 'I wanna rock';

//manipulando com includes 
console.log(phrase.includes('rock'));


//manipulando upper e lower case
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());

//manipulando com replace
updatePhrase = (phrase) => {
    if(phrase.toLowerCase().includes('rock')){
        phrase = phrase.replace('rock', 'rock and roll');
    }
    return phrase;
}
console.log(updatePhrase(phrase));

let wordList = phrase.split(" ");

let phraseWhithUnderscore = wordList.join("_");
console.log(wordList);
console.log(phraseWhithUnderscore);