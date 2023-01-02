var num1 = "100";
var num2 = 200;

// string to number
console.log( typeof num1);
console.log( typeof +num1);

// number to string
console.log(typeof num2);
console.log(typeof num2.toString());


function abc(){
    var x=10;
    console.log(x);
    if (x<6) {
        var A= "You are great";
        console.log(`xyz`, A);
    }else{
        console.log(" you are not great");
    }
   
  
}
abc();