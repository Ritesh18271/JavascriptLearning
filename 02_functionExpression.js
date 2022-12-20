var myName;
console.log(myName);

// Function Expression
var showResult = function() {
    console.log("show.....");
};
showResult();

// We can store a function as value in JS
var eligibility = function(value1, value2){
    var result = value1 > value2 ? value1 : value2 ;
    console.log(" Greatest number.......", result);
    return result;
}
var result = eligibility( 45, 20);
console.log(result);

var square = function(num){
var result = num*num;

console.log("Square of  ",num, "is", result);
return result;
}
console.log( typeof square);
var result =square(5);
var result =square(100);
var result =square(34);
