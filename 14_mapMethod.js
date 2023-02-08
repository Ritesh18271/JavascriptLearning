console.log("=======map()=============");
const arrayOfNumber = [0, 2, 3, 5, 6];
// [ 10,  12, 13, 15, 16 ]
const arrayTransform = arrayOfNumber.map((currentValue)=>{
    return currentValue+10; // 0+10  2+10 
});
console.log(arrayTransform);


const arrayOfNum = [0, 2, 3, 5, 6]; // [ 0, 3, 5, 8, 10]
 const arrayWith = arrayOfNum.map((value, index )=> {
    return value + index;
 });
 console.log(arrayWith);
