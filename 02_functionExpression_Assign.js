console.log("=============================================");
console.log("Calculating the square of following number");

var square = function(num){
    // console.log("square of num");
    console.log("square of ",num,"is", num*num); 
         
}
 square(5);
 square(6);
 square(25);
 square(100);
 console.log("=============================================");
 console.log("The type of a Square :");
 console.log(typeof square);
 console.log("=============================================");
 console.log("Calculating the area of a rectangle :");

 var areaOfrectangle = function(num1,num2){
 console.log("Area of rectangle is  499 * 917 = ", num1*num2);

}
areaOfrectangle(499, 917)
console.log("=============================================");
console.log("Swapping values inside function : ");
var swapValues= function(val1,val2){
    console.log("Before Swap: ", val1,val2);
     var temp=val1;
     val1=val2;
     val2=temp;
    console.log("After Swap: ", val1,val2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("=============================================");
console.log("Calculating characters of String : ");
var statement ="JS is the most popular language";
console.log("Given string is a : ", statement);

console.log("Total characters of a string is : ", statement.length);
console.log("the character at index 6 is : ", statement.charAt(6));
console.log("the character at index 11 is : ", statement.charAt(11));

var lengthTotal= statement.length
console.log("the character at last index is : ", statement.charAt(lengthTotal-1));
console.log("the first character of string is : ", statement.charAt(1));

var length= function(val){
    console.log("the Square of length of a string is : ", val*val);
}
length(31)