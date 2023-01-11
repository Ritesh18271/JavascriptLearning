// Arrow function with no argument and no return value
let show = ()=>{
    console.log("Hello");
}
show();

let display = ()=>{
    console.log("Display me");
}
display();

// => function Syntax
// let fun = ()=>{

// };

// Arrow Function with argument 
let sum = (n1, n2)=>{
    console.log(n1+n2);
}
sum(10, 10);

let sub = (val1, val2)=>{
    console.log( val1-val2);
}
sub(40,30);
// Arrow Function with argument and return value
let multiply = (n1, n2)=> {
    let mul = n1*n2;
    return mul;
}
let mulResult = multiply(5, 5);
console.log(mulResult);
// division

let division = (val1,val2)=>{
    let div = val1 / val2;
    return div;
};
let number =division(50,5);
console.log(number);
