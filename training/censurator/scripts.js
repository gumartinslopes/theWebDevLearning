var submitButton = document.getElementById('button-submit');
submitButton.onclick = turnFamilyFriendly;
var prohibitedWords = ['asshole','bitch','damm','crap','fuck', 'shit'];

function turnFamilyFriendly() {
    var textBox = document.getElementById('text-input');
    var suavizedText = checkBadWords(textBox.value); 
    textBox.value = suavizedText;
}

function checkBadWords(heavyContent) {
    for(var i = 0; i < prohibitedWords.length; i++){
        badWordIndex = heavyContent.search(prohibitedWords[i]);
        if(badWordIndex != -1){
            heavyContent = heavyContent.replace(prohibitedWords[i], suavize(prohibitedWords[i]));
        }   
    }
    console.log(heavyContent);
    return heavyContent;
}

function suavize(badWord) {
    console.log(badWord);
    return 'telletubbie';
}