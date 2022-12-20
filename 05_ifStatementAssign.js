console.log("====================== Question 1 =====================");
console.log("");
var Eligible = function(age){
    if((age>=18) && (age<=120)){
   console.log(`your age is ${age} you are eligbible for voting`);    
    }
    if((age<18) || (age>120)){
        console.log(`your age is ${age} you are not eligbible for voting`);
    }
}
Eligible(45);
console.log("");
Eligible(17);
console.log("");
Eligible(8);
console.log("");
Eligible(20);
console.log("");
Eligible(-10);
console.log("");
Eligible(200);
console.log("");
Eligible(0);

console.log("");
console.log("====================== Question 2 =====================");
console.log("");
function gradeCalculation(marks){
    if ((marks >= 90) && (marks <= 100)) {
        console.log(`Funtastic marks: ${marks},Your grade is A+`);        
    }
    if ((marks >= 75) && (marks < 90)) {
        console.log(`Excellent marks: ${marks},Your grade is A`);        
    }
    if ((marks >= 50) && (marks < 75)) {
        console.log(`Good marks: ${marks},Your grade is B`);        
    }
    if ((marks >= 35) && (marks < 50)) {
        console.log(`Marks is ${marks},Your grade is C,Need improvement`);        
    }
    if ((marks <= 0) || (marks > 100)) {
        console.log(`Marks: ${marks}, Please provide the valid marks`);        
    }
}
gradeCalculation(98);
console.log("");
gradeCalculation(80);
console.log("");
gradeCalculation(90);
console.log("");
gradeCalculation(0);
console.log("");
gradeCalculation(150);
console.log("");
gradeCalculation(-7);
console.log("");
gradeCalculation(35);
console.log("");
gradeCalculation(29);
console.log("");
gradeCalculation(64);
console.log("");
gradeCalculation(49);