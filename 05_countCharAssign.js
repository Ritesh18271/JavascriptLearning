
 function countCharA(string) {
    var counter = 0;
    for (let index = 0; index < string.length; index++) {
        var char = string.charAt(index);
        if (char=='a' ||
            char=='A' ) {
            console.log(` the count of ${char}`);
            counter = counter +1;
           
        }   
}
console.log(`" ${string} ${counter} "`);

}
countCharA("I Am Learning JavaScript, The Language of internet");
console.log("");
console.log("========================================================");
countCharA("My favorite movie is LAggAn");