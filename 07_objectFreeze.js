//Write a email to project manager in order to get access for project repository, JIRA, Confluence documentation

// Array freezing 
const arrayNumbers = [2, 4, 5, 8];
// arrayNumbers = []; /// Not allowed
// Freeze array
Object.freeze(arrayNumbers);
arrayNumbers.push(10);
console.log(arrayNumbers)

const sunil{
age :24,
name :"sunil",
comapny : "apple" 
}
const sunilAddress = {
    city : "Pune",
    pin: "431202"
}
// Merging two objects
object.assign(sunil,sunilAddress);
console.log(sunil);
console.log(sunilAddress);




//deep clone = primitive variables or exact same copy inside other variable or reference variable
 shallow clone = object or reference variable let myName = "Anil";
let yourName = "Sunil";

myName = yourName; // Deep Clone always performed on primitive data type

console.log(myName);
console.log(yourName);

yourName = "Jenifer";
console.log(myName);
console.log(yourName);

let anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
let sunil = {
    age: 26,
    name: "Sunil",
    company: "Google"
}
anil = sunil; // Shallow cloning
sunil.country = "India";
console.log("Sunil: ", sunil); // 
console.log("Anil: ", anil); //
  let myName = "Anil";
let yourName = "Sunil";

myName = yourName; // Deep Clone always performed on primitive data type

console.log(myName);
console.log(yourName);

yourName = "Jenifer";
console.log(myName);
console.log(yourName);

let anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
let sunil = {
    age: 26,
    name: "Sunil",
    company: "Google"
}
anil = sunil; // Shallow cloning
sunil.country = "India";
console.log("Sunil: ", sunil); // 
console.log("Anil: ", anil); //