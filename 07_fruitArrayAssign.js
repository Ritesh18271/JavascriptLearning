const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];

let lengthOfArray= fruits_seasonal.length
console.log(fruits_seasonal);
console.log(lengthOfArray);

console.log("======================== finding First & Last Element of Array =========================");
let firstElement = fruits_seasonal[0];
let lastElement = fruits_seasonal[lengthOfArray-1];
console.log("...#1");
console.log(`The first element of array is ${firstElement} and the last one is ${lastElement}`);

console.log("======================== Aadding Element in the Array =========================");
fruits_seasonal.unshift("Papaya");
console.log("...#2");
console.log(fruits_seasonal);

console.log("======================== Removing Element in the Array =========================");
let removeIndex = fruits_seasonal.indexOf("Mango");
fruits_seasonal.splice(removeIndex,1)
console.log("...#3");
console.log(fruits_seasonal);

console.log("======================== Insert Element in the Array =========================");
fruits_seasonal.push("Pineapple")
console.log("...#4");
console.log(fruits_seasonal);

console.log("======================== Insert Element in the Array =========================");
fruits_seasonal.splice(4,0,"Dragon Fruit")
console.log("...#5");
console.log(fruits_seasonal);

console.log("======================== Replace Element in the Array =========================");
fruits_seasonal.splice(2,1,"KIwi");
console.log("...#6");
console.log(fruits_seasonal);
console.log("======================== Logging Element in the Array =========================");
console.log("...#7");
console.log(fruits_seasonal.slice(1,5));

console.log("======================== Logging last three Element in the Array =========================");
var fruit_seasonal = ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruit_seasonal);
let sliceResult = fruit_seasonal.slice(2,fruit_seasonal.length);
console.log("...#8");
console.log(sliceResult);


class Fruits{
   
    constructor(name, color,taste,shape){
        this.name = name;
        this.color= color;
        this.taste=taste;
        this.shape= shape;
    }
    
}
let fruitBanana  = new Fruits("orange","orange","sour","circular");
console.log(fruitBanana.name,fruitBanana.shape,fruitBanana.taste);