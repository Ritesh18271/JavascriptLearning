//  Program to perform promise
 let isHeCheatyou= true;
 let ifHecheated = new Promise (function(yes,no){
    if (isHeCheatyou) {
     yes("I wanna Break up with you")
    }else{
     no("I am Sorry i didnt trust you that time")
    }
 });
 ifHecheated.then(function yes (cheated){
     console.log(cheated);
 })
 .catch(function no (notCheated){
     console.log("I promise it won't happen again Sorry !");
     console.log(notCheated);
 })
 .finally(function(){
    console.log("I am not like others");
     console.log("never trust other people");
     console.log("just trust me and stay with me");
     console.log("yes love you !");
 });

// map method
let arrayNo = [12,13,14,15,16]
let arrayAdd = arrayNo.map((currentValue)=>{
  return currentValue+10
});
console.log(arrayAdd);

let arraySumIndex = arrayAdd.map((currentValue,index)=>{
    return currentValue+index
});
console.log(arraySumIndex);

// Swapping values without getting third variable

let a = 10;
let b = 20;
console.log("before swapping");
console.log(a,b);
console.log("after swapping");
[a,b] = [b,a]
console.log(a,b);

let swapNums = function (num1 , num2){
    console.log("before swapping");
    console.log(num1,num2);
    console.log("after swapping");
 let  result = [num1,num2]=[num2,num1];
 
    return result
}
 let result = swapNums(20,30)
 console.log(result);

 // printing star pattern using js
// 1st
            let y = 10;
            let x = 10;

            let str = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i + j >= y){
                        str = str.concat("*");
                    }else{
                        str = str.concat(" ")
                    }
                }
                str = str.concat("\n")
            }
            console.log(str)
        // 2nd
            let str2 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i <= j ){
                        str2 = str2.concat("*");
                    }else{
                        str2 = str2.concat(" ")
                    }
                }
                str2 = str2.concat("\n")
            }

            console.log(str2)
           // 3rd
            let str3 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i >= j ){
                        str3 = str3.concat("*");
                    }
                }
                str3 = str3.concat("\n")
            }

            console.log(str3)

            // 4th
            let str4 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if( j >= i ){
                        str4 = str4.concat("*");
                    }
                }
                str4 = str4.concat("\n")
            }

            console.log(str4)
        // 5 th
            let str5 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i <= y / 2 && j >= (y / 2) - (i - 1) && j <= (y / 2) + (i - 1) ){
                        str5 = str5.concat("*");
                    }else if(i >= y / 2
                      && j > ((y / 2) -  i) * (-1)
                      && j < (y - ((y / 2) -  i) * (-1))){
                        str5 = str5.concat("*");
                    }
                    else {
                        str5 = str5.concat(" ");
                    }
                }
                str5 = str5.concat("\n");
            }

            console.log(str5)
        
// // function expression with if else

// var student = function( gradScore ,hscScore , sscScore , studName){
//     if (gradScore>= 70 || hscScore>=80 || sscScore>= 90) {
    
//         console.log(`Congrats you are eligible for interview`, studName);
    
    
//     }else{
//         console.log();
//     }
// }
//     student( 80,82,90, "Maruti") 
    
//     student( 71,75,91, "Shubhangi") 
    
//     student( 60, 79, 88, "Swati")

//     const student2={
//         name : "Maruti",
//         id : 11,
//         school:"SVM",
//         Certificates:{
//             1:"Drawing",
//             2:"Kho - Kho"
//         },
//         other:{
//           1:"Dancing",
//           2:"Drama",
//         }
//     }
//     let student3= JSON.parse(JSON.stringify(student2))
//     student2.name="Ritesh";
//     console.log(student2.name);
//     console.log(student3.name);

    // Array example for filter and reduce
    const array_roll_numbers1=[113,45,56,11,32,45,109,799,56,45];
    let evenNum1=[];
    array_roll_numbers1.filter((currentValue)=>{
        if (currentValue%2==0) {
            evenNum1.push(currentValue)
        }
    })
    console.log(evenNum1);
    let arr1= evenNum1.reduce((runningTotal,value)=>{
        return runningTotal+value
    })
    console.log(arr1);
    // using filter and reduce at same line

    let evenval=array_roll_numbers1.filter(value=>value%2==0)
                .reduce((runningTotal,value)=>{
                  return runningTotal+value
                })
                console.log(`by using filter and reduce`,evenval);