console.log("--------------Sorting assignment -------------");
console.log("...#1");
const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`Current Array`, array_roll_numbers);
array_roll_numbers.reverse();
console.log(`Reverse array`,array_roll_numbers,`\n`);
console.log("...#2");
array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log("...#3");
console.log(array_roll_numbers);
let result = array_roll_numbers.sort((a,b)=>{
    return a - b
})
console.log(result,`\n`);
console.log("...#4");

let result1 = array_roll_numbers.sort((a,b)=>{
    return a - b
})
console.log(`Greatest Number from Array:`,result1[result1.length-1],`\n`);
console.log("...#5");
let result2 = array_roll_numbers.sort((a,b)=>{
    return a - b 
})
console.log(`Smallest Number  from Array:`,result2[0],`\n`);
console.log("...#6");
const duplicates = new Set(array_roll_numbers);
console.log(duplicates);
