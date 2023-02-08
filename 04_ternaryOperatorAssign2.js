console.log("...#1 ");
console.log("Checking marriage eligibility for male");
function maleMarriageEligibility(gender,age,boyName){
var eligibility = ((gender=="male") && (age >= 21))
 ?`Hey ${boyName} you are eligible for marriage`
 :`Hey ${boyName} you are not eligible for marriage`;
 console.log(eligibility);

} 

console.log("");
 maleMarriageEligibility("male",25,"Billgates");
 maleMarriageEligibility("male",17,"Steve Jobs");
 
 console.log("");
 console.log("...#2 ");
 console.log("Checking marriage eligibility for female");
 function femaleMarriageEligibility(gender, age, girlName){
    var eligibility = ((gender == "female")&& (age >=18))
    ? `Hey ${girlName} you are eligible for marriage`
    : `Hey ${girlName} you are not eligible marriage`
    console.log(eligibility);
 }
 femaleMarriageEligibility("female",16,"Jenifer");
 femaleMarriageEligibility("female",27,"Malinda Gates");
 femaleMarriageEligibility("female",18,"Jana anna");