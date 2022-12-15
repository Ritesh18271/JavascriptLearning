function stringHandsOn(){
    console.log("===================== String Assignment no. 2 =====================")
console.log("------------------- String template ----------------");
var statement = "Hey you are doing good, keep it up";
var complimentSentence = statement;
console.log("");
console.log(`#1... ${complimentSentence}`);

var statement = "  Hey you are doing good, keep it up    ";

var statementLength = statement.length;
console.log("");
console.log(`#2... The length of a Sring is ${statementLength}`);

var resultTrim = statement.trim();
var totalLength= resultTrim.length;
console.log("");
console.log("#3...", "trim()", resultTrim, "Length: ", totalLength);

console.log("");
console.log(`#5...The first characters of string`, resultTrim.charAt(0), `The last character of string `, resultTrim.charAt(totalLength-1));

console.log("");
 var stringSplit= resultTrim.split(" ");
 console.log("#6...The count of total words ina given String", stringSplit.length);

 console.log("");
 console.log(`#7...The index of Word "good" is ` ,resultTrim.indexOf("good"));

 console.log("");
 console.log(`#8...The substring starting from index 22`,resultTrim.substring(22));

 var resultSlice= resultTrim.slice(22);
 console.log(`#8a...With slice starting from index 22`,resultSlice);

 console.log("");
 console.log(`#9...The string ends with word "up"`,resultTrim.endsWith("up"));
 console.log("");
 console.log(`#10...The string starts with word "Hey"`,resultTrim.startsWith("Hey"));
}
stringHandsOn();