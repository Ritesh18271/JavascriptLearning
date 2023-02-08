console.log("========================== Function Expression with ternary ============================");
console.log("");
var eligibility = function(gradScore,hscScore,sscScore,candidateName){
var eligible = (gradScore>=70 || hscScore>=80 || sscScore>=90)
 ? `Congrats ${candidateName} you are eligible for TCS interview`
 : `Unfortunately ${candidateName} you are not eligible for interview`
 console.log(eligible);
}
eligibility(80,86,90, "Ritesh");
console.log("");
eligibility(70,65,55, "Monika");
console.log("");
eligibility(60,79,88, "Muskan");



