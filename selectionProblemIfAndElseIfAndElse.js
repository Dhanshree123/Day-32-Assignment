//number to word
const prompt=require('prompt-sync')();
let number=prompt("Enter single digit number : ");

if(number==0)
    console.log("Zero");
if(number==1)
    console.log("One");
if(number==2)
    console.log("Two");
if(number==3)
    console.log("Three");
if(number==4)
    console.log("Four");
if(number==5)
    console.log("Five");
if(number==6)
    console.log("Six");
if(number==7)
    console.log("Seven");
if(number==8)
    console.log("Eight");
if(number==9)
    console.log("Nine");
//Number to week
let numberToWeak=prompt("Enter week day : ");

if(numberToWeak==1)
    console.log("Sunday");
if(numberToWeak==2)
    console.log("Monday");
if(numberToWeak==3)
    console.log("Tuesday");
if(numberToWeak==4)
    console.log("Wednesday");
if(numberToWeak==5)
    console.log("Thursday");
if(numberToWeak==6)
    console.log("Friday");
if(numberToWeak==7)
    console.log("Saturday");

//Display unit
let number=prompt("Enter number : ");

if(numberUnit==1)
    console.log("unit");
if(numberUnit==100)
    console.log("hundred");
if(numberUnit==10)
    console.log("ten");
if(numberUnit==1000)
    console.log("thousand");

//Arithematic Operations
let a=prompt("Enter First number : ");
let b=prompt("Enter Second number : ");
let c=prompt("Enter Third number : ");

let operations=new Array();
operations[0]=a+b*c;
operations[1]=a%b+c;
operations[2]=c+a/b;
operations[4]=a*b+c;

let maximum=0;
let minimum=operations[0];

for(let index=0;index<operations.length;index++){
    if(operations[index]>maximum)
        maximum=operations[index];
    if(operations[index]<minimum)
        minimum=operations[index];
}

console.log("maximum value is "+maximum);
console.log("minimum value is "+minimum);
