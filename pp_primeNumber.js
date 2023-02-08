console.log("----------- program to check if a number is prime or not-------------");
console.log("");
let number = 25;
let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
    console.log("");
    
    console.log("----------- program to check if a number is prime or not by taking Values from user-------------");
    console.log("");
    let num = parseInt(prompt("Enter a number"));
    let isPrime1 = true;
    
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime1 = false;
                break;
            }
        }
        if (isPrime1) {
            console.log(`${num} is a prime number`);
        } else {
            console.log(`${num} is a not prime number`);
        }
        console.log("");