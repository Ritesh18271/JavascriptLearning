console.log("------------- Filter Assignment ------------");
console.log("");
class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    
    this.emp_id=emp_id;
    
    this.emp_name = emp_name;
    
    this.emp_dept = emp_dept;
    
    this.emp_salary = emp_salary;
    
    this.emp_company = emp_company;
    
    }
}
    const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
    
    const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
    
    const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
    
    const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
    
    const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
    
    const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
    
    const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");
    
    array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log("...#1");
    let arrayFilter = array_emps.filter((company)=>{
         return company.emp_company=="Wipro";
    });
    arrayFilter.forEach(value => {
        console.log(value.emp_name);
        console.log(value,`\n`);
    });
 console.log("...#2");
    let arrayDept = array_emps.filter((Dept)=>{
         return Dept.emp_dept=="IT"|| Dept.emp_dept=="HR";
    });
    arrayDept.forEach(value => {
        console.log(value.emp_name,value.emp_dept);
        console.log(value,`\n`);
    });

    console.log("...#3");
    let arrayId = array_emps.filter((Id)=>{
         return Id.emp_id>50;
    });
    arrayId.forEach(value => {
        console.log(value.emp_id, value.emp_name);
        console.log(value,`\n`);
    });
    console.log("...#4");
    let arrayAvm = array_emps.filter((Avm)=>{
         if (Avm.emp_name.startsWith("A")||Avm.emp_name.startsWith("V")||Avm.emp_name.startsWith("M")){
            return Avm.emp_name
         }
    });
    arrayAvm.forEach(value => {
        console.log( value.emp_name);
        console.log(value,`\n`);
    });
    console.log("...#5");   
const salary = array_emps.reduce((runningTotal,value)=>{
    return runningTotal+value.emp_salary;
},0);
console.log(`The average of salary of all employee is ${salary/array_emps.length}\n`);

console.log("...#6");
let result=0;
const average= array_emps.filter((avgIt)=>{
     if (avgIt.emp_dept=="IT") {
         return result+=avgIt.emp_salary
        
     }
});
console.log(`The average salary of IT department is: ${result/average.length}`);
