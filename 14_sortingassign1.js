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

   let array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
   console.table(array_employees);
   console.log("...#1 ID by ascending order",`\n`);
   array_employees.sort((id1,id2)=>{
           return id1.emp_id > id2.emp_id;
   });
   array_employees.forEach((currentValue)=>{
    console.log(currentValue.emp_id,currentValue.emp_name,currentValue.emp_dept);
   })
   console.log("");
   console.log("...#2 Departments By ascending order");
   array_employees.sort((dep1,dep2)=>{
           return dep1.emp_dept > dep2.emp_dept ? 1 : -1;
   });
   array_employees.forEach((currentValue)=>{
    console.log(currentValue.emp_id,currentValue.emp_name,currentValue.emp_dept);
   })
   console.log("");
   console.log("...#3 Salary By descending order",);
   array_employees.sort((sal1,sal2)=>{
           return sal1.emp_salary > sal2.emp_salary ? -1 : 1;
   });
   array_employees.forEach((currentValue)=>{
    console.log(currentValue.emp_name,currentValue.emp_salary,currentValue.emp_company);
   })