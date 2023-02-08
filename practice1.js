// // swapping values using function expression
 
// var swap = function(num1,num2) {
//     console.log(`before Swapping`,num1,num2);
//     var temp=num1;
//     num1=num2;
//     num2=temp;
// console.log(`after swapping`,num1,num2);  
// }
//  swap(20,30);

// var multi = function(val1,val2){
//     result = val1*val2;
//     return result
// }
// let multiply = multi(30,5);
// console.log(result);

// // Cloning using assign and spread operator

// let array=[1,3,4,5]
// let array2 = array;
// array2[2]=2;
// console.log(array);
// console.log(array2);

// console.log("Array shallow Cloning");
// let arrayOfEvenNum = [0, 2, 4, 6, 8 ];
// let arrayOfNum = arrayOfEvenNum; // Shallow Cloning
// arrayOfEvenNum[1] = 10;
// console.log(arrayOfEvenNum);
// console.log(arrayOfNum);

// // deep cloning
// let numbers=[4,5,6,7,8,9];
// let nums =[5,6,7,8,9];

// let newArray={...nums,...numbers}
// console.log(newArray);

// // Type conversion
// var num = 20;
// var str = "10";
// var newNum = +str;
// console.log(num+newNum);

// var string = 100;
// var newStr = string.toString()
// console.log(newStr);
// console.log(typeof newStr);
// var num = 30;
// let add = newStr==num;
// console.log(add);
// console.log(typeof add);

// // Sorting 
// class Employee {
//     constructor(empId, empName, empAge, empCity) {
//       this.empId = empId;
//       this.empName = empName;
//       this.empAge = empAge;
//       this.empCity = empCity;
//     }
//   }
//   const empSup = new Employee(11, "Supriya", 23, "PUNE");
//   const empDhir = new Employee(22, "Dheeraj", 24, "MUMBAI");
//   const empSachin = new Employee(33, "Sachin", 22, "Surat");
//   const empGayatri = new Employee(44, "Gayatri", 21, "Bangluru");
  
//   let arrayOfemp= [empSup,empDhir,empSachin,empGayatri]
//   console.log("...Printing age of employees in ascending order");
//   arrayOfemp.sort((age1,age2)=>{
//     return age1.empAge > age2.empAge ? 1:-1 ;
//   })
//   arrayOfemp.forEach((currentValue)=>{
//       console.log(currentValue.empAge,currentValue.empName,currentValue.empCity);
//   });

//   console.log("...Printing id's of employees in descending order");
//   arrayOfemp.sort((id1,id2)=>{
//     return id1.empId > id2.empId ? -1:1 ;
//   })
//   arrayOfemp.forEach((currentValue)=>{
//       console.log(currentValue.empId,currentValue.empName,currentValue.empCity);
//   });

// //One of our friend asked this question in interview can you guys, please give a try.
// //Ques:  Add all the count values in response using for loop and console the sum as output.

// const response = {
//   maran: {
//     count: 1,
//   },
//   gas: {
//     count: 2,
//   },
//   prelude: {
//     count: 5,
//   },
//   keys: ['maran', 'gas', 'prelude'],
// };
// sum = 0;
// for (let index = 0; index< response.keys.length; index++) {
//   const element = response.keys[index];
//   sum = sum+response[element].count

// }
// console.log(`sum of all values in response`,sum);

// // reverse string by using function
// function reverstring(str){
//   const array =[]
//   for (let index = str.length -1; index>=0; index--) {
//        array.push(str[index])
       
//   }
//    return array.join('')
// }
// console.log(reverstring("Kolhapur"));

// // Splice method in array

// let months = ["January","February","Monday","Tuesday"];
// let days = months.splice(2,0, "March","April");
// console.log("Days---->", days);
// console.log("Months---->",months);

// // map method in array
// const arr = [2,4,6,7];
// let arrMap =arr.map( (element)=> {
//  return element*3
// })
// console.log(arrMap);

// const name= "kolhapur";
// let x=[];
// for (const str in name) {
//    x.push(name[str])
//   }
// console.log(x);

// class Person{
//   name;
//   age;
//   constructor(name, age){
//    this.name = name;
//    this.age = age;
//   }
// }
// let person = new Person("Ritesh",24)
// console.log(person);

// Cloning object by assign

const mahi={
  match1: 367,
  runs1: 11000,
}

const virat={
  match2: 259,
  runs2: 18500,
}

let Legends = Object.assign(mahi,virat);
console.log(Legends);

let champs = {...mahi,...virat};
console.log(champs);

// 2. Deep clone using JSON.stringfy
console.log("===== Deep clone using JSON.stringfy ======");
const empPeter = {
    name: " Peter Parker",
    age: 50,
    marks: {
        science: 70, 
        math: 90,
        english: 87
    }
}

let Tony = JSON.parse(JSON.stringify(empPeter));
console.log(Tony);
Tony.name="Tony";
Tony.age = 47;
console.log(empPeter);
console.log(Tony);

const cap = {
  name: "Steve rogers",
  age: 70,
  position: "leader",
}
let buck = cap
console.log(buck);

const food={
  sweet: "Gulabjamun",
  spicy: "chicken biryani",
}
let yourFood = food;
console.log(yourFood);
yourFood.sweet="khavaBarfi";
yourFood.junk="Pizza";
console.log(yourFood);

//  // checking the number is prime or not

//  let num = 24;
//  let isPrime = true;
// for (let i = 2; i < num; i++) {
//    if (num%i==0) {
//      isPrime=false;
//      break
//    }
 
// }
// if (isPrime) {
//   console.log("it is a prime number");
// }else{
//  console.log("Its not a prime number");
// }
// // function constructor assign

// function Student( name,id,city,age) {
//  this.name = name;
//  this.id = id;
//  this.city = city;
//  this.age = age;
// }
// let ritesh = new Student("Ritesh",18,"Kolhapur",24);
// let varsha = new Student("Varsha",19,"Pune",26);
// let sanket = new Student("Sanket",20,"Mumbai",26)

// console.log(`The name of the student is ${ritesh.name}, the id number is ${ritesh.id}, the city is ${ritesh.city}`);
// console.log(varsha);
// console.log(sanket);

// Checking number prime or not by taking value from user

// let value = parseInt(prompt("Enter a number"));
// let vPrime = true;

// for (let i = 2; i < value; i++) {
//     if (value%2==0) {
//       vPrime = false;
//       break;
//     } 
// }if (vPrime) {
//   console.log(`${value} is a prime number`);
// }else{
//   console.log(`${value} is not a prime number`);
// }

// // Sorting 
// class Employee {
//     constructor(empId, empName, empAge, empCity) {
//       this.empId = empId;
//       this.empName = empName;
//       this.empAge = empAge;
//       this.empCity = empCity;
//     }
//   }
//   const empSup = new Employee(11, "Supriya", 23, "PUNE");
//   const empDhir = new Employee(22, "Dheeraj", 24, "MUMBAI");
//   const empSachin = new Employee(33, "Sachin", 22, "Surat");
//   const empGayatri = new Employee(44, "Gayatri", 21, "Bangluru");
  
//   let arrayOfemp= [empSup,empDhir,empSachin,empGayatri]
//   console.log("...Printing age of employees in ascending order");
//   arrayOfemp.sort((age1,age2)=>{
//    return age1.empAge > age2.empAge ? 1:-1;
//   });
//   arrayOfemp.forEach((currentValue)=>{
//    console.log(currentValue.empName,currentValue.empCity);
//   })

//   const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

//   console.log(arrayNumbers);

//   console.log(`###4. All even numbers in given array`);
//  let arrEven = [];
//  for (let index = 0; index < arrayNumbers.length; index++) {
//   const element = arrayNumbers[index];
//   if (element%2==0) {
//     arrEven.push(element)
//   }
  
//  }
//  console.log(arrEven);
//  console.log(`###4. All odd numbers in given array`);
//  let arrOdd = [];
//  for (let index = 0; index < arrayNumbers.length; index++) {
//   const element = arrayNumbers[index];
//   if (index%2==!0) {
//     arrOdd.push(element)
//   }
  
//  }
//  console.log(arrOdd);

// practicing for each and sorting

// class Cars{
//   constructor(model,company,color,Engine){
//    this.model= model;
//    this.company=company;
//    this.color=color;
//    this.Engine =Engine;
//   }
// }
// let swift = new Cars("Swift vdi","Suzuki","Red",1248);
// let i20 = new Cars("Hyundai i20","Hyundai","Black",1400);
// let polo = new Cars("Vw POLO","volkswagan","Blue",1396);

// let carArray =[swift,i20,polo];
// console.log("=== engine by ascending order ===");
// carArray.sort((cc1,cc2)=>{
// return cc1.Engine - cc2.Engine 
// })

// carArray.forEach((currentValue)=>{
//    console.log(currentValue.Engine, currentValue.model);
// })
// console.log("=== color by ascending order ===");
// carArray.sort((c1,c2)=>{
//   return c1.color > c2.color ? 1 : -1
//   })
  
//   carArray.forEach((currentValue)=>{
//      console.log(currentValue.color, currentValue.model);
// //   })
// // array by sort
//   const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
//   console.log(`Cureent array ${array_roll_numbers}`);
//   let reverseArray =array_roll_numbers.reverse();
//   console.log(reverseArray);
 
//   let result = array_roll_numbers.sort((n1,n2)=>{
//          return n1 > n2 ?1:-1;
//   })
//   console.log(result);
// console.log(result[result.length-1]);
// console.log(result[0]);

// const dupli = new Set(array_roll_numbers);
// console.log(dupli);

// const arrayOfNumber = [0, 2, 3, 5, 6, 8,12,24,56,56,67];
// let add = arrayOfNumber.reduce((runningTotal,value)=>{
//    return runningTotal + value
//  })
//  console.log(add);

//  let evenArr = arrayOfNumber.filter(value=>value%2==0)
//  .reduce((runningTotal,value)=>{
//   return runningTotal+value
//  })
//  console.log(evenArr);

// class Cars{
//   constructor(model,company,color,Engine){
//    this.model= model;
//    this.company=company;
//    this.color=color;
//    this.Engine =Engine;
//   }
// }
// let swift = new Cars("Swift vdi","Suzuki","Red",1248);
// let i20 = new Cars("Hyundai i20","Hyundai","Black",1400);
// let polo = new Cars("Vw POLO","volkswagan","Blue",1396);

// let carArray = [swift,i20,polo];
// let upEngine = carArray.map((engine)=>{
//   return engine.Engine*2
// })
// upEngine.forEach((engine)=>{
//   console.log(engine);
// })

// let partyPromise= true;
// let promiseOfParty = new Promise(function(fullfilled,notFullfilled){
//   if (partyPromise) {
//     fullfilled("If you come for parties");
//   }else{
//     notFullfilled("If u don't come")
//   }
// })
// promiseOfParty.then(function(){
//    console.log("We want more parties like this");
// }).catch(function(){
//   console.log("Fuck you !");
// })
// .finally(function(){
//   console.log("Invitation from bhaiyya !");
//   console.log("Ala tar Party naitr nai ");
// })


// var fname = "Sushant ";
// var surname ="Khillare";

// var Fullname = fname + surname;
// console.log(Fullname);
// var Fullname= fname.concat("sunil ",surname);
// console.log(Fullname);

// var greet = "Good Evening";
// var indexOF = greet.indexOf("E");
// console.log(indexOF);

// var indexOfEVE = greet.indexOf("ing");
// console.log(indexOfEVE);

// var replaceG = greet.replace("Good", "Bad");
// console.log(replaceG);

// var greet = "good evening";
// console.log(greet.toUpperCase());

// var greet = "    Hello ! welcome     ";
// var lengthGreet = greet.length;
// console.log(lengthGreet);
// var greetTrim = greet.trim()
// console.log(greetTrim.length);

// var temp = greet.toUpperCase();


var string = function() {
  var newString =("I am Angular Developer");
  console.log(newString);
  console.log(newString.length);
  var splitString = newString.split(" ");
  console.log(`total words`,splitString.length);
}
string()

var js = "JavaScript is language of internet";

let count = 0;

for (let index=0; index<js.length; index++) {
 let char= js.charAt(index);
if (char == " "){

count++;}

}
console.log(count);

var str = "I am Great at javascript";
var count1 = 0;
for (let index = 0; index <str.length; index++) {
  let char = str.charAt(index)
   if (char == " ") {
    count1++;
   }  
}
console.log(count1);

let display = ()=>{
  console.log("Print me");
}
display();

let show = (num1,num2)=>{
   console.log(num1+num2);
}
show(23,4);
let showUS =(val1,val2)=>{
  let multi = val1* val2;
  return multi
}
let multiRes=showUS(23,4);
console.log(multiRes);

var js = "I love javascript language";
var count2 = 0;
for (let index = 0; index <js.length; index++) {
 let char = js.charAt(index);
 if (char == " ") {
    count2++;
 }
  
}
console.log(count2);

()=>{

}

let show1 = ()=>{
  console.log("hello");
}
show1();

let display1 = (nums1,nums2)=>{
  console.log(nums1+nums2);
}
display1(4,6);

let show2 = (value1, value2)=>{
  let multi = value1*value2;
  return multi;
}
let multiply = show2(4,5);
console.log(multiply);

const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
array_roll_numbers.reverse();
console.log(array_roll_numbers);

array_roll_numbers.sort();
console.log(array_roll_numbers);
let result = array_roll_numbers.sort((a,b)=>{
  return a>b ? -1: 1
})
console.log(result);
let newSET = new Set(array_roll_numbers);
console.log(newSET);

console.log("");
class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    
    this.emp_id=emp_id;
    
    this.emp_name = emp_name;
    
    this.emp_dept = emp_dept;
    
    this.emp_salary = emp_salary;
    
    this.emp_company = emp_company;
    
    }
}
    const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
    
    const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
    
    const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
    
    const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
    
    const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
    
    const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
    
    const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

    let arrayEmp = [emp_anil,emp_mahi,emp_radha,emp_rishi,emp_sonali,emp_viny,emp_monika];

  let FilterIt= arrayEmp.filter((itDept)=>{
      return itDept.emp_dept=="IT";
  })

 FilterIt.forEach(value =>{
   console.log(value.emp_dept,value.emp_name);
 })

 
const array_roll=[113,45,56,11,32,45,109,799,56,45];

let evenNums = array_roll.filter(value=>value%2==0)
             console.log(evenNums);

var movie = "Pathan";
let splitString= movie.split("").reverse("").join("");
console.log(splitString);