console.log("----------- program to check if a number is prime or not-------------");
console.log("");
let number = 11;
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
    
    