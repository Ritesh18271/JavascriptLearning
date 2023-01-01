// WAP to print number from 5 to 15 by incrementing 

var i = 5;
while (i <= 15) {
    console.log(i);
    i++;
    
}

console.log('-------------------------------');
// WAP to print number from 50 to 40 by decrementing 1

var i= 50;
while (i >=40){
    console.log(i);
    i--;
}

console.log('-------------------------------');
//WAP to find first 15 odd numbers

var i = 0;
while (i<=30 ){
    if(i % 2 != 0){
        console.log(i);
    }
    i ++;
}

console.log('-------------------------------');
//WAP to find first 10 Even numbers

var i = 0;
while(i <= 10){
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}

console.log('-------------------------------');
//WAP to print table of 5 like --->  5 10 15 20 25 ....  50

var i = 5;
do {
    console.log(i);
    i = i + 5;
} while (i <= 50 );

console.log('-------------------------------');
//WAP to print table of 10 like --->  10 20 30  40 ....  100

var i = 10;
do {
    console.log(i);
    i = i +10;
} while (i <=100);

console.log('-------------------------------');
//WAP to print table of 10 in reverse order like ---> 100 90 80 70 .....10

var i = 100;
do {
    console.log(i);
    i = i -10
} while (i >=10);