const car = {
    carName: "Create SX",
    company: "Hundai",
    launchYear: 2017
}
const carEngine ={
    enginePower: "1499CC",
    maxPower: "113 BHP"
}
console.log("...#1");
console.log(`Merging Object by using assign`);
let assignObject =Object.assign(car,carEngine);
console.log(assignObject);
console.log("");
console.log("...#2");
console.log(`Merging Object by using Spread Operator`);

let mergedObject = {...car, ...carEngine};
console.log(mergedObject)
