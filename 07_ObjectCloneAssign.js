const arrayNums = [20,3,4,56,90,400,49];
console.log(`Output1.shallow cloning`);
let clonedArray = arrayNums;
console.log(clonedArray);
clonedArray.push(55,66);
console.log(`Original Array :`, arrayNums);
console.log(`Cloned Array :`, clonedArray);
console.log("");
console.log(`Output2. Deep cloning using spread operator`);
const arrayNums1= [20,3,4,56,90,400,49];
console.log(`Given array is : ${arrayNums1}`);
let deepClonedArray = [...arrayNums1];
arrayNums1.push(10,25);

console.log(`Cloned array is :`, deepClonedArray);
console.log(`Original array is :`,arrayNums1);
console.log("");
console.log(`Output3. Merge array using concat`);
const arrayEven = [2,30,14,8];
let combinedArray = [...arrayNums,...arrayEven];
console.log(`Merge result of "arrayNums" and "arrayEven": ${combinedArray}`);
console.log("");
console.log("----------------------------------------------------------------");
console.log("");
console.log(`Output 4`);
const employeeInfo={
    emp_id : 27,
    emp_name:" Jon Doe",
    salary :{
        july_month: "40,000INR",
        aug_month: "50,000INR",
        jun_month: "65,000INR",
    },
    address:{
        locality:{
            colony:"Om Vrindavan Society",
            street:"Kanch Pokli 431202",
        },
        City :"Mumbai",
        State : "Maharashstra",
        Country : "India",
    },
    mobiles:["+91 8600 3456 88 ", "1800-4567-32 ", "+91-9096 5678 77 "],
}
console.log(`employee_info created`, employeeInfo);
console.log("");
console.log(`--------- Output 5. a -------`);

console.log(`${employeeInfo.address.locality.colony}, ${employeeInfo.address.locality.street}, ${employeeInfo.address.City}, ${employeeInfo.address.State}, ${employeeInfo.address.Country}`);
console.log("");
console.log(`-------- Output 5. b  Mobile numbers ----------`);

console.log(`${employeeInfo.mobiles}`);
console.log("");
console.log(`-------- Ouput 6.a ------------`);

let UpdateemployeeInfo = JSON.parse(JSON.stringify(employeeInfo));
 UpdateemployeeInfo.salary.july_month = "80,000INR";
 console.log(employeeInfo);
console.log(UpdateemployeeInfo);
console.log(employeeInfo.salary);
console.log(UpdateemployeeInfo.salary);
console.log(`Previous Salary: `,employeeInfo.salary.july_month);
console.log(`Updated Salary: `,UpdateemployeeInfo.salary.july_month);
console.log("");
console.log(`-------- Ouput 6.b ------------`);

let updateCountry = JSON.parse(JSON.stringify(employeeInfo))
updateCountry.address.Country = "United Kingdom";
console.log(`Previous Country :`,employeeInfo.address.Country);
console.log(`Updated Country :` ,updateCountry.address.Country);