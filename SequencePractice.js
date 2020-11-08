//Case 1
let singleDigit = Math.floor(Math.random() * 10);
console.log(singleDigit);

//Case 2
let dice1=Math.floor(Math.random()*6+1);

//Case 3
let dice2=Math.floor(Math.random()*6+1);
let sum =dice1+dice2;
console.log("sum of two dice numbers "+dice1+" and "+dice2+" is "+sum);

//Case 4
let num1=Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);
let num2=Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);
let num3=Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);
let num4=Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);
let num5=Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);

let sumOfFive=num1+num2+num3+num4+num5;
console.log("sum of five random two digit numbers is "+sumOfFive);
let averageOfFive=sumOfFive/5;
console.log("average of the five two digit numbers is "+averageOfFive);

//Case 5
const feetToMeter=0.3048;
console.log("42 inches to feet is "+feetToMeter*42);
let lengthInFeet=60;
let breadthInFeet=40;
let areaInMeter=lengthInFeet*(feetToMeter)*breadthInFeet*(feetToMeter);
let areaOf25Plots=25*areaInMeter;
console.log("area of rectangle in meter is :"+areaInMeter);
console.log("area of 25 such plots is "+areaOf25Plots);