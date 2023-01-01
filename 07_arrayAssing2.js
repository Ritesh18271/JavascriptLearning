const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is :`);
console.log(arrayNumbers);

console.log(`###1. Total elements or length of given array`);
let totalLength = arrayNumbers.length;
console.log(totalLength);
console.log(``);

console.log(`###2. First and last element in given array`);
console.log(`First element is : ${arrayNumbers[0]}`);
console.log(`Last element is : ${arrayNumbers[totalLength - 1]}`);
console.log(``);

console.log(`###3. Third last element in given array`);
let thirdLast = arrayNumbers[totalLength - 3];
console.log(thirdLast);
console.log(``);

console.log(`###4. All even numbers in given array`);
let evenNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 == 0) {
    evenNumArray = evenNumArray.concat(element);
  }
}
console.log(evenNumArray);
console.log(``);

console.log(`###5. Odd numbers in given array`);
let oddNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 != 0) {
    oddNumArray = oddNumArray.concat(element);
  }
}
console.log(oddNumArray);
console.log(``);

console.log(`###6. Even positioned elements`);
var pos = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    pos = pos.concat(arrayNumbers[index]);
  }
}
console.log(pos);
console.log(``);

console.log(`###7. Odd positioned elements`);
var pos = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 != 0) {
    pos = pos.concat(arrayNumbers[index]);
  }
}
console.log(pos);
console.log(``);

console.log(`###8. Sum off elements of given array`);
let sumOfElements = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  sumOfElements = sumOfElements + element;
}
console.log(sumOfElements);
console.log(``);

console.log(`###9. Numbers which are multiples of 5`);
let multiple = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 5 == 0) {
    multiple = multiple.concat(element);
  }
}
console.log(multiple);
console.log(``);

console.log(`###10. Is number 115 available in given array`);
let numAvailable = arrayNumbers.includes(115);
console.log(numAvailable);
console.log(``);

console.log(`###11. Is number 23 available in given array`);
let isAvailable = arrayNumbers.includes(23);
console.log(isAvailable);
console.log(``);

console.log(`###12. Inserting 55, 66 before index 3`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log(``);


console.log(`###13. Deleting 3 elements starting from index 4`);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);