//Min and Max

let numArray = new Array();

for(let i =0;i<5;i++){
 
     numArray[i] = Math.floor(Math.random()*10)*100+Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);
}

let maximum=0;
let minimum=1000;

for(let i =0;i<5;i++){
    if(numArray[i]>maximum)
        maximum=numArray[i];
    if(numArray[i]<minimum)
        minimum=numArray[i];
}
console.log("numbers are "+numArray);
console.log("Maximum Value is "+maximum);
console.log("Minimum Value is "+minimum);

//
const prompt = require('prompt-sync')();

let day = parseInt(prompt('Enter the day: '));
let month = prompt('Enter the Month: ');
let result = false;
if(month == 'March'){
    if(day>20)
        result = true;
}
if (month == 'April' || month == 'May') {
    result = true;
 }
 if (month == 'June') {
     if (day < 20) {
         result = true;
     }
 }
 console.log("Is day and month between given period: " + result);

 //Leap Year

let year = parseInt(prompt('Enter the year: '));
let resultYear = false;
if(year % 4 == 0){
    if (year % 100 == 0) {
        if(year % 400 == 0){
            resultYear = true;
        }
    } else {
        resultYear = true;
    }
}

if (resultYear) {
    console.log("A Leap Year");
}
else {
    console.log("Not A Leap Year");
}

//HeadOrTail
let headOrTail=Math.floor(Math.random()*2);
if(headOrTail==0)
    console.log("coin flip result: "+"Head");
else console.log("coin flip result: "+"Tail");
