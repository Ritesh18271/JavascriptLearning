console.log("========================================================");
console.log("-----------Question 1------------");
function countCharA(string) {
    var counter = 0;
    for (let index = 0; index < string.length; index++) {
        var char = string.charAt(index);
        if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
             char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
            console.log(`${string}`);
            counter = counter +1;
           
        }   
}
console.log(`" Total Number of vowel in the the string is ${counter} "`);

}
countCharA("I am very good IT Developer");
console.log("");


console.log("-----------Question 2------------");
function sumOf(value) {
    var result =0 ;
    var cube;
    for (let index = 1; index <=5; index++) {
       cube = index * index * index;
       result = result + cube;
    }
    console.log(`The Sum of number from 1 to 5 is : ${result}`);
}
sumOf();

console.log("-----------Question 3------------");
function oddChars(arg) {
    var str = "";
    var pos = 0;
    console.log(arg);
    for (let index = 0; index < arg.length; index++) {
        if(arg.charAt(index)!=" ")   {
            if (pos%2==1) {
                str = str.concat(arg.charAt(index));
            }
            pos++;
        }
    }
    console.log(str);
}
oddChars("Hard work always pays back");
oddChars("Soon I will be Angular IT Champ");

console.log("-----------Question 2------------");

function factProgram(input) {
    var fact = 1
    for (let index = 1; index <=input; index++) {
     fact = fact * index  
        
    }
    console.log(`The factorial of ${input}:=`, fact);
}
factProgram(5);
factProgram(7);
factProgram(8);
factProgram(12);