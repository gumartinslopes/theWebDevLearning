var phrase = "You fucker";
var prohibiterWords = ['ass','prick', 'fuck', 'shit', 'crap', 'punk ass', 'dope', 'jerk', 'shimack', 'penny picker', 
'fag','faggot', 'piss', 'pissed', 'cum', 'bitch']; 

if(isFamilyFriendly(phrase))
    console.log('Safe');

else {
    phrase = transformInFamilyFriendly(phrase);
    console.log(`Not family friendly we changed a little bit your phrase to : 
    \n${phrase} 
    \nNow your grandma would approve it!`);
}


function isFamilyFriendly(phrase) {
    var isSafe = true;
    var i = 0;
    
    while(isSafe && i < prohibiterWords.length){
        if(phrase.toLowerCase().includes(prohibiterWords[i]))
            isSafe = false;
        i++
    }
    return isSafe;
}

function transformInFamilyFriendly(phrase) {
    for(var i = 0; i < prohibiterWords.length; i++){
        if(phrase.toLowerCase().includes(prohibiterWords[i]))
            phrase = phrase.replace(prohibiterWords[i], bleepWord(prohibiterWords[i]));
            console.log(prohibiterWords[i]);
    }
    return phrase;
}

function bleepWord(word){
    var bleepedWord = 'bl';
    for(var i = 0; i < word.length;i++){
        bleepedWord += 'e';
    }
    return bleepedWord + 'p';
}