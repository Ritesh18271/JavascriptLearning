let arrayOfNames = [];//empty array
console.log(arrayOfNames);

let myName = "Monika";

let arrayOfNumbers = [5,10,4,6,7,10,6];
console.log(arrayOfNumbers);


console.log(`=============================Toatal number of elements available in array====================================`);

let totalElements = arrayOfNumbers.length;
console.log(`Toatal number of elements in arrayOfNumbers is ${totalElements}`);

let typeOfArray = typeof arrayOfNumbers;
console.log(`Type of array - arrayOfNumbers is ${typeOfArray}`);

console.log(`==============================Accessing array elements==============================`);

let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at zero index is ${elementAtZeroIndex}`);


console.log(`=== Accessing array elements===`);

console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);

let indexOf7 = arrayOfNumbers.indexOf(7);
console.log(`Index of element 7 --> ${indexOf7}`);

let indexOf10 = arrayOfNumbers.indexOf(10);
console.log(`Index of element 10 --> ${indexOf10}`);

console.log(`Traversing array using for loop `);
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
}
console.log(`Even number elements in  array using for loop `);
for (let index = 0; index < arrayOfNumbers.length; index++) {
    if(index%2==0){
    const element = arrayOfNumbers[index];
    console.log(element);
}
}

console.log(`Traversing array using for loop in Reverse order`);
// initialization   condition  update 
let lastIndex = arrayOfNumbers.length-1;
for (let index = lastIndex; index > 0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element); 
}

// Array of salaries
console.log(`Accessing salary of each employee`);
let arrayOfSalaries = [10000, 20000, 30000, 20000, 40000];
let sumOfSal = 0;// 30000
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];// 10000 20000 30000
    sumOfSal = sumOfSal+element;
}
console.log(`Total Salary of all employee is : ${sumOfSal}`);

console.log(`======== push() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.push(3); // Adding element in the last
arrayOfNum.push(11,22,33);
console.log(arrayOfNum);


console.log(`======== unshift() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.unshift(77);
arrayOfNum.unshift(99, 111, 333);
console.log(arrayOfNum);


console.log(`======== pop() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33];
console.log(arrayOfNum);
let popResult = arrayOfNum.pop();
console.log(popResult);
console.log(arrayOfNum);


console.log(`======== shift() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33];
let shiftResult = arrayOfNum.shift();
console.log(shiftResult);
console.log(arrayOfNum.shift);


console.log(`======== slice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNum.slice(3);
let sliceRes = arrayOfNum.slice(2, 5);
console.log(arrayOfNum);
console.log(sliceResult);
console.log(sliceRes);

console.log(`======== join() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let joinResult = arrayOfNum.join(" ");
console.log(joinResult);
console.log(typeof joinResult);

console.log(`======== concat() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let arrayOfName = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray = arrayOfNum.concat(arrayOfName, arrayOfCities);
console.log(concatArray);

console.log(`======== Resize an array ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum.length);
arrayOfNum.length = 5;
console.log(arrayOfNum);
console.log(arrayOfNum.length);

