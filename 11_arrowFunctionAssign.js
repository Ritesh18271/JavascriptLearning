console.log("------------ Arrow function assignment ------------");
console.log(`...#1`);
let display =()=>{
    console.log("Good Morning, Today is Monday \n");
};
display();
console.log(`...#2 A`);
let multi =(num1,num2,num3)=>{
     console.log(num1*num2*num3);
};
multi(5,5,2);
console.log(`...#2 B`);
multi(10,4,num3=1);

console.log(`...#3 A`);
let add = (num1,num2,num3,num4,num5)=>{
      console.log(`Addition Of 5 values`,num1+num2+num3+num4+num5);
};
add(100,100,200,349,756);
console.log(`...#3 C`);
add("I am ","learning ","ES6 ","Features ","in depth");