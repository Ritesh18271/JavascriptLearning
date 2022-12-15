
console.log("1)");
function squareOfWordLenght(value){
console.log(`The length of ${value} is ${value.length} and The square of its length ${value.length * value.length}`);
}
squareOfWordLenght("javascript");
console.log("");
squareOfWordLenght("Google Chrome");
console.log("");
squareOfWordLenght("Develover Smart");

console.log("--------------------------------------------------------------------------------------------------------");
console.log("2)");
var string = function (){
    var newString = ("I am Angular Developer");
    console.log(newString);
    console.log(`the length of a string ${newString.length}`);
    console.log(`the total number of words available in th string are ${newString.split(" ").length}`);
    var divideString = newString.length/newString.split(" ").length
    console.log(`the String length divided by total number ${divideString}`);

    var multiplyString = newString.length*newString.split(" ").length
    console.log(`the String length multiplied by total number ${multiplyString}`);
}
string();