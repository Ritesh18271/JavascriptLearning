console.log("====================== Question 1 =====================");
console.log("");

// var eligibilty = 
var eligibilty=function (age){
    if (age <=0 || age> 120) {
        console.log(`Invalid data: ${age}\n`);
       
    }
    else{
        console.log(`Valid data\n`);
        if (age >= 18) {
            console.log(`Congratulations your age is ${age}, you can vote \n`);            
        }
        else{
            console.log(`Sorry your age is ${age}, you are minor\n`);
        }
    }
}
eligibilty(45);
eligibilty(17);
eligibilty(20);
eligibilty(8);
eligibilty(-10);
eligibilty(200);
eligibilty(0);

console.log("");
console.log("====================== Question 2 =====================");
console.log("");
function gradeCalculation(marks){
    if (marks >= 100 || marks <= 0){
        console.log(`Invalid marks: ${marks}`);
        console.log(`Please provide valid marks`);
    }
    else{
        console.log(`Valid data`);
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
        if ((marks >= 0) && (marks < 35)) {
            console.log(`Marks is ${marks},Your grade is C,Need improvement`);        
        }
        if ((marks <= 0) || (marks > 100)) {
            console.log(`Marks: ${marks}, Please provide the valid marks`);        
        }            
        }
    }
gradeCalculation(98);
console.log(``);
gradeCalculation(80);
console.log(``);
gradeCalculation(90);
console.log(``);
gradeCalculation(0);
console.log(``);
gradeCalculation(150);
console.log(``);
gradeCalculation(-7);
console.log(``);
gradeCalculation(35);
console.log(``);
gradeCalculation(29);
console.log(``);
gradeCalculation(64);
console.log(``);
gradeCalculation(49);