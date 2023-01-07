// // var num1 = "100";
// // var num2 = 200;

// // // string to number
// // console.log( typeof num1);
// // console.log( typeof +num1);

// // // number to string
// // console.log(typeof num2);
// // console.log(typeof num2.toString());


// // function abc(){
// //     var x=10;
// //     console.log(x);
// //     if (x<6) {
// //         var A= "You are great";
// //         console.log(`xyz`, A);
// //     }else{
// //         console.log(" you are not great");
// //     }
   
  
// // }
// // abc();

// //print numbers from 70 to 60 decrement by 2

// // for (let index = 70; index >=60; index=index-2) {
// //     console.log(index);
    
// // }

// // var i=2;
// // while (i<=20) {
// //     console.log(i);
// //     i++;
// // }
// var sentence = "yes you can do it"
// var counter = 0;
// for (let index = 0; index < sentence.length; index++) {
//     var char = sentence.charAt(index);
//     if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
//         char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
//         console.log(char);
//         counter = counter +1;
//     }   
// }
// console.log(`Total vowels in string is : ${counter}`);

// // How to create Table in javascript
// const employees =[
//    {id: 15, empName:`John`, dept:`Support`},
//    {id: 10, empName:`Max`, dept:`IT`},
//    {id: 12, empName:`Bella`, dept:`Support`},
//    {id: 19, empName:`Amelia`, dept:`IT`},
// ];
// console.table(employees);


// // creating map 

// let mapOfbank = new Map();

// mapOfbank.set("Name","Ritesh",);
// mapOfbank.set("City","kolhapur");
// mapOfbank.set("id",28)

// console.log(mapOfbank);

// mapOfbank.delete("Name");
// console.log(mapOfbank);

// let hasOrNot=mapOfbank.has("Name");
// console.log( hasOrNot);

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

let Cloneflower={
     4:"Lotus",
     5:"Kevda",
     6:"hibiscus",
}

let CloneObject={...flowers,...Cloneflower};
console.log(`cloning using spread`,CloneObject);