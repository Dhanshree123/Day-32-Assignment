//NumberToWord
const prompt = require('prompt-sync')();

let number = parseInt(prompt('Enter a number: '));
let word;
switch(number) {
    case 1:
        word = 'One';
        break;
case 2:
        word = 'Two';
        break;
case 3:
        word = 'Three';
        break;
case 4:         
        word = 'Four';
        break;
case 5:
        word = 'Five';
        break;
case 6:
        word = 'Six';
        break;
case 7:
        word = 'Seven';
        break;
case 8:
        word = 'Eight';
        break;
case 9:
        word = 'Nine';
        break;
default:
        word = 'Input a proper number';
        break;
}
console.log("The Number is: "+ word);

//NumberToWeek
let inp = parseInt(prompt('Enter a number: '));
let weekdays;
switch(inp) {
    case 1:
        weekdays = 'Monday';
        break;
    case 2:
        weekdays = 'Tuesday';
        break;
    case 3:
        weekdays = 'Wednesday';
        break;
    case 4:
        weekdays = 'Thursday';
        break;
    case 5:
        weekdays = 'Friday';
        break;
    case 6:
        weekdays = 'Saturday';
        break;
    case 7: 
        weekdays = 'Sunday';
        break;
    default:
        weekdays = 'Invalid Input';
}

console.log('The day of the week is: ' + weekdays);

//NumberToUnit

let numberToUnit=parseInt(prompt("Enter  number  "));

switch(numberToUnit){
    case 1:console.log("Unit");
        break;
    case 10:console.log("Ten");
        break;
    case 100:console.log("Hundred");
        break;
    case 1000:console.log("Thousand");
        break;
    default:console.log("invalid");
}

//UnitConversion

const feetToInch=12;
const inchToFeet=1/12;
const feetToMeter=0.3048;
const meterToFeet=3.28084;

console.log("1.Feet To Inch");
console.log("2.Inch To Feet");
console.log("3.Feet To Meter");
console.log("4.Meter To Feet");
let choice=parseInt(prompt("choose one "));

let conversion=parseInt(prompt("Enter value for conversion :"));
switch(choice){
    case 1:console.log("value in feet converted to inch "+conversion*feetToInch);
        break;
    case 2:console.log("Value in inch converted to feet "+conversion*inchToFeet);
        break;
    case 3:console.log("Value in feet converted to meters "+conversion*feetToMeter);
        break;
    case 4:console.log("value in meter converted to feet "+conversion*meterToFeet);
        break;
    default:console.log("invalid choice");
}