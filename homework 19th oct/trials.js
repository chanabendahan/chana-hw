
var text = prompt("Enter your name") 
.toUpperCase() 
.replaceAll(" ", "") 
.split("") 
.sort(); 

function buildMeAnObjectForMyLetterPleaseAndThankYou(char) {
const obj = {}
obj.letter = char;
obj.qty = 1;
return obj;
}

const FinalArray = [];
FinalArray.push(buildMeAnObjectForMyLetterPleaseAndThankYou(text[0]));

for(let i = 1; i < text.length; i++) {
var letter = text[i];
var lastObj = FinalArray[FinalArray.length-1]; 
 if(letter == lastObj.letter) {
  lastObj.qty++
} else {
  FinalArray.push(buildMeAnObjectForMyLetterPleaseAndThankYou(letter));
}
}

console.log(FinalArray)





























