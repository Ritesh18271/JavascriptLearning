console.log("=================== Assignment 01 ==================");
console.log("---------------------- Part 1 ----------------------");
console.log("============= Before Swapping =============")
var sweety="Sweety"
var cutie="Cutie"
console.log(sweety,cutie);

console.log("============== After Swapping ==============")
var temp="Sweety"
 sweety=cutie
 cutie=temp
console.log(sweety,cutie);

console.log("---------------------- Part 2 ----------------------");
console.log("============= Before Swapping ==============")
var num1="100"
var num2="200"
var num3="300"
console.log(num1,num2,num3);

console.log("============= After Swapping =============")
var temp="100"
num1=num2
num2=temp
var temp="200"
num2=num3
num3=temp
var temp="100"
num1=num3
num3=temp
console.log(num1,num2,num3);
