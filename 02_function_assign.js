
console.log("==================== Question 1st =====================");
function first(){
       console.log("This is my first program");
}

first();
function second(){
    console.log("This is my second program")
}
second();
console.log("==================== Question 2nd =====================");

function personalDetails(firstName,lastName,collegeName){
      console.log(firstName);
      console.log(lastName);
      console.log(collegeName);
}
personalDetails("Ritesh","kamble","Swami vivekanad college kolhapur");
console.log("===================== Question 3rd ======================");

function swapValuesDude(Virat,Anushka){
console.log("Before swap :", Virat,Anushka);
var temp=Virat;
Virat=Anushka;
Anushka=temp;
console.log( "After swap :", Virat, Anushka);
}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);
console.log("===================== Question 4th ======================");
var  addThreeValues = function(val1, val2, val3){
console.log("Addition Of Three Values :" ,val1+val2+val3);
return "Addition";
 }
 var Addition = addThreeValues(10.23, 600, 40);
 
 var Addition = addThreeValues( "Hello", "Good","Morning");

