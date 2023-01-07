class Bank{
   constructor(bankName,location,account_no,ifsc,interest_rate){
    this.bankName = bankName;
    this.location = location;
    this.account_no = account_no;
    this.ifsc = ifsc;
    this.interest_rate = interest_rate;
   }
}
console.log("...#1 Objected created axis_bank, sbi_bank,icici_bank, kotak_bank,hdfc_bank,punjab_bank");

console.log("...#2");
let axis_bank = new Bank("AXIS Bank","Kolhapur","0888219133445","AXIS0098","9%");
let sbi_bank = new Bank("SBI Bank","Pune","091234586999","SBI000098","8.5%");
let icici_bank = new Bank("ICICI Bank","Satara","092111000084","ICICI0098","7%");
let kotak_bank = new Bank("KOTAK Bank","Sangli","0886435278893","KOTAK004","7.5%");
let hdfc_bank = new Bank("HDFC Bank","Mumbai","099887656737","HDFC00134","10%");
let punjab_bank = new Bank("PUNJAB Bank","Delhi","0911108484990","PUNB00981","9.5%");

let BankArray=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,punjab_bank];
for (const data of BankArray) {
    console.log(`The Bank name :`,data.bankName,`, and the location :`,data.location );
}
console.log("");
console.log("...#3");
let result={};
for (let index = 0; index < BankArray.length; index++) {
   
    if (BankArray [index]==kotak_bank){
      result = {...BankArray[index]}
    }

}
console.log(result);
console.log("");
console.log("...#4");
for (let index = 0; index < BankArray.length; index++) {

    const element = BankArray[index];
    console.log(element);
}