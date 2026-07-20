



function totalSum(){


const houseA= 500;
const houseB =1000;


const sum = houseA + houseB

return sum

}


const recieveResult = totalSum();
console.log("result of function", recieveResult)



function totalDistance(){

    const lahoreDistance= 300;
    let islamabadDistance = 400;

    let totalDistanceResult = lahoreDistance + islamabadDistance

    return totalDistanceResult
}

 
const receiveTotal  = totalDistance();

console.log(receiveTotal)



function conditionImplemet (){
    let marks = 89;


    if(marks > 95){
        console.log("EXCELLENT")
    }else{
        console.log("not exceelent")
    }
}


conditionImplemet();


function totalArea() {
 const kitchenArea= 750;
 const roomArea=972;
 const totalAreaResult= kitchenArea + roomArea
 
 return totalAreaResult
}
const addition = totalArea();
console.log(addition)

function totalgrading() {
let phyGrade= 70;
const bioGrade= 55;
const totalgradingmark = phyGrade + bioGrade
return totalgradingmark
}
const marking = totalgrading();
console.log(marking)

function totalEmployees() {
    const maleEmployees = 25;
    const femaleEmployees = 30;

    const total = maleEmployees + femaleEmployees;
    return total;
}
const employees = totalEmployees();
console.log(employees);


function totalBooks() {
    let englishBooks = 120;
    let mathBooks = 80;
    const total = englishBooks + mathBooks;
    return total;
}
const books = totalBooks();
console.log(books);

function totalMarks() {
    let mathMarks= 70;
    let scienceMarks= 89;
    const total = mathMarks + scienceMarks;
    return total;
}
const result = totalMarks();
console.log (result);


function totalPatients() {
    const malePatients = 45;
    const femalePatients = 20;



    if(malePatients> 45){
        console.log("if")
    }else{
  console.log("else")
    }
}
totalPatients()



function totalSalary() {

const officeSalary = 34000;
const schoolSalary = 22000;

if(officeSalary< 29000){
    console.log("officeSalary is less than 29000");
    }else{
    console.log("officeSalary is greater than 29000");
    }
}


totalSalary();



// arrow function

const totalSalaryFunction = () => {

const officeSalary = 34000;
const schoolSalary = 22000;

if(officeSalary< 29000){
    console.log("officeSalary is less than 29000");
    }else{
    console.log("officeSalary is greater than 29000");
    }

   
}

totalSalaryFunction()

const totalAgeFunction = () => {
    const maryamAge = 24;
    const sanaAge = 32;

    if(maryamAge > 24){
        console.log("maryamAge is greater than 26");
    }else{
        console.log("maryamAge is lesser than 25");
    }

}
totalAgeFunction()


const totalMarksFunction = () => {
    const islMarks= 92;
    const urduMarks= 75;
    if(urduMarks> 75) {
        console.log("urduMarks are lesser than 70");
    }else{
        console.log("urduMarks are greater than 75");
    }

}
totalMarksFunction()

const checkWeather = () => {
    let temperature= 40;
    if ( temperature > 43) {
    console.log("temperature is lesser than 30");
 } else{
    console.log("temperature is greater than 43");
 }

}

checkWeather()


  const totalBookPages =  () => {
    let urduBookPages= 750;
    let materiaMedicaBookPages= 472;
    const totalPages= urduBookPages + materiaMedicaBookPages
    return totalPages;
}
const sum= totalBookPages();
console.log(sum);


const checkArea = () => {
    let labArea = 525;
    let classroomArea = 980;
    const totalArea = labArea + classroomArea
    return totalArea;
}
const totalsum = checkArea();
console.log(totalsum);


const studentFunction = () => {
    let marks=80;
    let attendance=90;
    if(marks < 80) {
        console.log("marks is lesser than 75");
    }else{
        console.log("marks are greater than 72");
    }
}
studentFunction();














