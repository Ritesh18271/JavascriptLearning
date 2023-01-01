console.log("...#Function constructor assign");
console.log("----------------------------------------");
console.log("");
function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
Bank.prototype.openTime ="9 AM IST";
Bank.prototype.closeTime = "6 AM IST";
let yesBank = new Bank("YES Bank", "Kolhapur","YESB0001896","1530");
let sbiBank = new Bank("SBI Bank", "Pune","SBIB0000216","2830");
let mahBank = new Bank("Maharashtra Bank", "Sangli","MAHB4561896","9820");
let axisBank = new Bank("Axis Bank","Satara","AXIB00765432","2435");

console.log("");
console.log(`Details of YES Bank = Bank Name: ${yesBank.bankName}, the Location: ${yesBank.location}, the IFSC:${yesBank.ifscCode}, Branchcode: ${yesBank.branchCode}`);
console.log("");
console.log(`Details of SBI Bank = Bank Name: ${sbiBank.bankName}, the Location: ${sbiBank.location}, the IFSC:${sbiBank.ifscCode}, Branchcode: ${sbiBank.branchCode}`);
console.log("");
console.log(`Details of MAH Bank = Bank Name: ${mahBank.bankName}, the Location: ${mahBank.location}, the IFSC:${mahBank.ifscCode}, Branchcode: ${mahBank.branchCode}`);
console.log("");
console.log(`Details of AXIS Bank = Bank Name: ${axisBank.bankName}, the Location: ${axisBank.location}, the IFSC:${axisBank.ifscCode}, Branchcode: ${axisBank.branchCode}`);

console.log("-----------------------------------------------------------------------------------------------------------");
console.log(`-------The Opening time & Closing time of SBI Bank-------`);
console.log("");
console.log(`The Opening time of SBI Bank is : ${Bank.prototype.openTime}`);
console.log(`The Closing time of SBI Bank is : ${Bank.prototype.closeTime}`);
console.log("");
console.log(`-------The Opening time & Closing time of Axis Bank-------`);
console.log("");
console.log(`The Opening time of AXIS Bank is : ${Bank.prototype.openTime}`);
console.log(`The Closing time of AXIS Bank is : ${Bank.prototype.closeTime}`);

console.log("");
console.log(`-------The Opening time & Closing time of Axis Bank-------`);
console.log("");
console.log(`The Name Of The Bank: ${sbiBank.bankName} The Branchcode is ${sbiBank.branchCode} and the Opening time of the Bank is ${Bank.prototype.openTime}`);