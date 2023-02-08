// Given the home work

// Ritesh -> Homework
function riteshHomeWork(completeHomework){
    console.log("Ritesh is doing homework... ");
    console.log("After some time.. Ritesh did homework..");
    completeHomework();
}

// Sayali -> Homework
function sayaliHomeWork(){
    console.log("I am happy Ritesh, you have completed homework");
    console.log("I am bit lazy and don't have time as well");
    console.log("So copying as it is your homework");
}
riteshHomeWork(sayaliHomeWork);
//sunilHomeWork();

// function show(){
//     console.log("This is show function..");
// }
// setTimeout(show, 3000);
setTimeout(function show(){
    console.log("This is show function..");
}, 3000);

// setTimeout(show, 4000);
setTimeout(function display(){
    console.log("This is my string");
},4000);
