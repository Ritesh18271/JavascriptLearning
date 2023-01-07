console.log("================ Assignment on Class===============");
console.log("------------------#1. Defining Class for vehicle --------------------");
class Vehicle{
    constructor(companyName,color,average,wheeler,speed){
        this.companyName=companyName;
        this.color=color;
        this.average=average;
        this.wheeler=wheeler;
        this.speed=speed;
    }
}
let bike= new Vehicle("Suzuki","Green","40","2 Wheeler","240kph");
let car = new Vehicle("BMW","DarkBlue","45","4 Wheeler","300Kph");
let truck= new Vehicle("Tata","Brown","10","12 Wheeler","150kph");
let auto = new Vehicle("Bajaj","yellowBlack","20","3 Wheeler","80kph");
let plane = new Vehicle("airIndia","white","12","6 Wheeler","930kph");

console.log(bike);
console.log("");
console.log(car);
console.log("");
console.log(truck);
console.log("");
console.log(auto);
console.log("");
console.log(plane);

console.log("--------#2. Defining Class for College and Invoking Method ---------");

class College{

    constructor(collegeName,location,numberOfDepartment,principle){
        this.collegeName=collegeName;
        this.location=location;
        this.numberOfDepartment=numberOfDepartment;
        this.principle=principle;
    }
   Collegedetails(){
    console.log(this.collegeName,this.location,this.numberOfDepartment,this.principle);
   }
}
let vivekanand= new College("Vivekanand College","Kolhapur","16","Dr.A.S.Gawade");
let cyber= new College("Cyber College","Kolhapur","11","Dr.P.B.Mohite");
let mahaveer= new College("Mahaveer College","Kolhapur","8","Dr.B.R.Tawade");
let shahaji= new College("Shahaji College","Kolhapur","12","Dr.J.S. Mullani");

console.log("");
vivekanand.Collegedetails();
cyber.Collegedetails();
mahaveer.Collegedetails();
shahaji.Collegedetails();

console.log("");
console.log("----------- Creating Function by passing objects of class-------------");
function traverseObject(value){
    for (const key in value) {
        if (Object.hasOwnProperty.call(value, key)) {
            const element = value[key];
            console.log(`${key}  : ${element}`);
            
        }
    }
}
console.log("...#1");
traverseObject(vivekanand);
console.log("");
console.log("...#2");
traverseObject(cyber);
console.log("");
console.log("...#3");
traverseObject(mahaveer);
console.log("");
console.log("...#4");
traverseObject(shahaji);
console.log("");


