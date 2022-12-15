console.log("...#1");
console.log("");
console.log(" The greatest numbers");

var fun = function (val1, val2){
    var greatestNum = (val1 > val2) ?val1 : val2;
    console.log(`The greatest number from ${val1} and ${val2} is ${greatestNum}`);
}
fun(10,-10);
fun(800,899);
console.log("");

var fun = function(value){
    var result = ((value % 2)==0) ? "EVEN": "ODD";
    console.log(`${value} is ${result}`);
}
console.log("...#2");
console.log("");
console.log("The Even and Odd numbers");

fun(29);
fun(44);
fun(0);
fun(101);
console.log("");
console.log("...#3");
console.log("");
console.log("Checking The length and its Even or Odd");
var fun = function (value){
    var length = (value.length);
    var result = ((length %2)==0) ?"EVEN":"ODD"; 
    console.log ( `length of  word ${value} is ${length} and its ${result}`);  
    return result;
}
var res = fun ("JavaScript");
var res = fun ("Developer");
var res = fun ("Google");
