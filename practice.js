 var num1 = "100";
 var num2 = 200;

// string to number
console.log( typeof num1);
 console.log( typeof +num1);

//  number to string
 console.log(typeof num2);
console.log(typeof num2.toString());


function abc(){
    var x=10;
    console.log(x);
    if (x<6) {
    var A= "You are great";
    console.log(`xyz`, A);
    }else{
        console.log(" you are not great");
    }
   
  
 }
 abc();

//print numbers from 70 to 60 decrement by 2

for (let index = 70; index >=60; index=index-2) {
    console.log(index);
    
 }

var i=2;
while (i<=20) {
     console.log(i);
   i++;
 }
var sentence = "yes you can do it"
 var counter = 0;
 for (let index = 0; index < sentence.length; index++) {
     var char = sentence.charAt(index);
     if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
         char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
         console.log(char);
         counter = counter +1;
     }   
 }
 console.log(`Total vowels in string is : ${counter}`);

//  How to create Table in javascript
 const employees =[
    {id: 15, empName:`John`, dept:`Support`},
    {id: 10, empName:`Max`, dept:`IT`},
    {id: 12, empName:`Bella`, dept:`Support`},
    {id: 19, empName:`Amelia`, dept:`IT`},
 ];
 console.table(employees);


//  creating map 

 let mapOfbank = new Map();

 mapOfbank.set("Name","Ritesh",);
 mapOfbank.set("City","kolhapur");
 mapOfbank.set("id",28)

 console.log(mapOfbank);

 mapOfbank.delete("Name");
 console.log(mapOfbank);

 let hasOrNot=mapOfbank.has("Name");
 console.log( hasOrNot);

const person={
height : "5feet",
age : 23,
weight : 60,
gender : "male",
}
console.log(person);

// adding nested object in nested property

person.name="Monika";
console.log(person.name);
console.log(person);
// deleting property from object

delete person.weight;
console.log(person);

person.age = 30;
let personAge = person.age;
console.log(personAge);

console.log("Array Deep Cloning");
let arrayOfNumber = [0, 2, 4, 6, 8 ];
let cloneArray =[];


let employee = JSON.parse(JSON.stringify(arrayOfNumber));

// merging object using json 
const student={
    name: "Ritesh",
    id : 18,
    class :"5th",

    marks:{
        maths: 70,
        science :80,
        english : 85,
    },
    certificates:{
        1 : "Hindi Speaking",
        2: "Drawing competition",
        3:"computer basics",
    }
}

let student2 = JSON.parse(JSON.stringify(student));
console.log(student);
console.log(student2);

student2.name="Monika";
student2.id = 19;
console.log(`original properties:-`,student.name,student.id);
console.log(`Updated properties:-`, student2.name,student2.id);
student2.marks.hindi=89;
console.log(student.marks);
console.log(student2.marks);

// cloning using spread operator

let flowers={
    1:"Rose",
    2:"Jasmine",
    3:"lilly"
}

let Cloneflower ={...flowers};
console.log(Cloneflower);


let arrayOfnum =[2,5,6,7,8];
console.log(arrayOfnum);
 arrayOfnum.unshift(0,1)
console.log(`Added nums`,arrayOfnum);

arrayOfnum.splice(3,0,3,4)
console.log(arrayOfnum);

arrayOfnum.splice(7,8)
console.log(arrayOfnum);

arrayOfnum.splice(1,1);
console.log(arrayOfnum);

//swapping two values 
var virat ="virat";
var dhoni ="Dhoni";
console.log("----before swapping----");
console.log(virat,dhoni);

console.log("---- After swapping----");
var temp = "virat";
virat = dhoni;
dhoni = temp;
console.log(virat, dhoni);

// even or odd 

var num = 12;
for (let index = 0; index <= num; index++) {
    if (num %2==0) {
        console.log(`${num} is a even number`);
    }else{
        console.log(`${num} is a odd number`);
    }
    
}
// Greatest number

var fun = function (val1, val2){
    var greatestNum = (val1>val2) ? val1 :val2 ;
    console.log(`the greatest number from ${val1} and ${val2} is ${greatestNum}`);
}
fun(30,40);
fun(90,80);

// arrow function with no arg no return
let display = ()=>{
    console.log("Display me");
}
display();

// arrow function with arg no return
let show = (val1,val2)=>{
   console.log(val1+val2);
};
show(30,10)

let Me = ()=>{
    console.log("Log me");
};
Me();
// with arg no return type
let div = (n1,n2)=>{
  console.log(n1 / n2);
};
div(30,2);

// with arg with return type
let multiply =(val1,val2)=>{
   let mul = val1 * val2;
   return mul;
};
let result = multiply(20,5);
console.log(result);


console.log("======== Find odd numbers==========");
const array = [2, 3, 4, 5, 6, 7, 0, 34, 57];
const arrayOfodd=[];
console.log(array);
array.forEach((currentValue)=>{
    if (currentValue%2==!0) {
        arrayOfodd.push(currentValue);
        console.log(currentValue);
    }

});
console.log("Array Of Odd numbers");
console.log(arrayOfodd);

const arrayOfnum1=[10,9,8,7,6,5];
console.log(arrayOfnum1);
arrayOfnum1.forEach(function(currentValue,index,array){
      console.log(`the index`,index, `and the value`,currentValue);
});


// while loop
console.log("----while loop----");
var i = 2;
while (i<=20) {
  
    console.log(i);
    i = i+2;
}
// do while
console.log("Do while loop");
var index = 7;

do {console.log(index);
    index = index+7
    
} while (index<=70);
//for loop
console.log("for loop");
for (let index = 7; index <=70; index=index+7) {
      
      console.log(index);;
    
}
