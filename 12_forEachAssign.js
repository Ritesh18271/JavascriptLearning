console.log("-------------- For each loop Assignment -------------");

console.log("---------------- #1 Array element with Index ------------------");
const array_numbers = [1,-7,40,502,-77,91,0,108,89,-601];

array_numbers.forEach( (currentValue, index, array )=>{
    console.log(`Given value`,currentValue, " And the index:", index);
} );

console.log("---------------- #2 finding positive numbers ----------------");
array_numbers.forEach((currentValue)=>{
     if (currentValue>=0) {
        console.log(currentValue);
     }
});

console.log("---------------- #3finding negative numbers ----------------");
arrayOfnegative=[];
console.log(array_numbers);
array_numbers.forEach((currentValue)=>{
    if (currentValue<0) {
        arrayOfnegative.push(currentValue)
        console.log(currentValue);

    }
});
console.log("Array of negative numbers");
console.log(arrayOfnegative);

console.log("---------------- #4 finding Even numbers ----------------");
arrayOfeven=[];
console.log(array_numbers);
array_numbers.forEach((currentValue)=>{
    if (currentValue%2==0) {
        arrayOfeven.push(currentValue);
        console.log(currentValue);
    }
});
console.log("Array of Even numbers");
console.log(arrayOfeven);

console.log("---------------- #5 Sum of all numbers ----------------");
let result =0;
array_numbers.forEach((currentValue =>{
    result+=currentValue;
}
));
console.log(`The sum of All numbers of Array :`,result );

console.log("---------------- #6 Even positioned Numbers of Array ----------------");
let evenPostionNumber=0;
array_numbers.forEach(function(currentValue,index){
    if ((index) %2==0) {
        console.log(currentValue);
    }
});
console.log(evenPostionNumber);
   