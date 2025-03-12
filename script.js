// variable declare and data store
var a = 10;
var b = 10;
// console.log(a + b); // 20

var c = "sajal ";
var d = "50";
var f = 50;

// console.log(c + d); // sajal50
// console.log(c * d); // NaN
var e ;
// console.log(e); // undefined
// console.log(typeof a); //type of variable return

// console.log( Number(a)); // return the string number as number

// console.log(a * e); // NaN

// console.log(Number.MAX_VALUE); // shows maximum number  1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // shows minimum number  5e-324
// console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// var q = string(123);  
// console.log(q); // result error

// console.log(Number.parseFloat(d)); // string number convert to number
// console.log(a.toString); //  type function
// console.log(toString(a)); // object undefined
// console.log(String(a)); // number convert to string. result 10 as string. 

// console.log(Number(Infinity)); // result infinity as number color.
// console.log(String(Infinity)); // result infinity as string color.
// console.log(Boolean(Infinity)); // result is true as boolean result. 

// boolean to string #####

// var w = true;
// console.log(w.toString); // output as [Function: toString]
// console.log(String(w)); // output as string color. 

// octal and hexadecimal number  %%%%%%

// var hex = 0xff; // hexadecimal number. starts with 0x 
// var oct = 0965; // octal number. starts with 0
// console.log(hex); //output 255
// console.log(oct); // output 965

//  increment and decrement  @@@@@@

// console.log(++a); // add 1 and then asign value to new number
// console.log(--b); // substract 1 and then asign value to new number

// console.log(a++); // asign declared value and then add 1 and store it. 
// console.log(a); // output increased value 
// console.log(b--); // assigned declared value then minus 1 and store it.
// console.log(b); // outut decresed value. 

// ***** assignment operators

// console.log(a==b); // output- true. check only value.  a =10 , b = 10
// console.log(a=== b); // output- true. check value and type. 
// console.log(a == c); // false . c = 'sajal'
// console.log(c === d); // false . c = 'sajal' d = '50'
// console.log(a != c);  // true. value are not equal
// console.log(c !== d); // true.  value and type are not equal.
// console.log(d === f); // false . value same but type not same. 
// console.log(a > b); // false
// console.log(a >= b); // true
// console.log(a < b);  // false
// console.log(a <= b); // true

// @@@@ math function #####

// console.log(Math.E); // 2.718281828459045
// console.log(Math.PI); // 3.141592653589793

// var h = -4.567;
// h = 4.456;
// console.log(Math.abs(h)); // convert to absolute positive number.
// console.log(Math.floor(h)); // return number without decimal
// console.log(Math.ceil(h)); // return number next intiger number . 
// console.log(Math.round(h)); // return round number. if after decimal less then 5 it will return less value. if greater than 5 it will return greater value. 

// console.log(Math.max(300, 200, 109));  // return 300 , maximum number.
// console.log(Math.min(300, 190, 456));  // return 190, minimum number.
// console.log(Math.pow(3, 2));  // return 9, power of 3 to 2. 
// console.log(Math.sqrt(25));  // return 5, root of 25. 
// console.log(Math.random()); // returns random decimal number every time. 
// console.log(Math.round(Math.random())); // return 0  or 1 every time
// console.log(Math.round(Math.random) * 20 + 1); // return NaN
// console.log(Math.round(Math.random() * 20 + 1)); // return any number from 1 to 20.
// console.log(Math.round(Math.random() / 40 + 1)); // return 1 every time. 
// console.log(Math.round(Math.random() * 50 - 1)); // return from 1 to 50 randomly. 

// #### date function

var date = new Date()
// console.log(date); // returns current date time. 
// console.log(date.toDateString); // type function. 
// console.log(date.toTimeString); // type function. 
// console.log(date.toLocaleDateString); // type function. 
// console.log(date.toLocaleTimeString); // type function. 
// console.log(date.toLocaleString); // type function. 

// console.log(date.toDateString()); // everyone shows result. 
// console.log(date.toTimeString()); // everyone shows result. 
// console.log(date.toLocaleDateString()); // everyone shows result. 
// console.log(date.toLocaleTimeString()); // everyone shows result. 
// console.log(date.toLocaleString()); // everyone shows result. 

// console.log(date.getFullYear()); // all are showing result. 
// console.log(date.getMonth()); // all are showing result. 
// console.log(date.getDate()); // all are showing result. 
// console.log(date.getTime()); // all are showing result. 
// console.log(date.getDay()); // all are showing result. 
// console.log(date.getMinutes()); // all are showing result. 
// console.log(date.getSeconds()); // all are showing result. 
// console.log(date.getWeeks()); // it is not a function. will not show any result. show error. 

// %%% js if condition

// if(a > b){
//     console.log(a + " is greater than " + b); // a = 10, b = 10 so condition is false. no output.
    
// }

// if(a < f){
//     console.log(f + " is greater than " + a); // a = 10, f = 50, so condition is true. get output. 
// }

// odd or even number checking

// if (f%2 === 0) {
//     console.log("f is even number"); // get output. because condition is true. 
// }
// if (f%2 === 1) {
//     console.log("f is odd number"); // no output. because condition is false. 
// }

// %%%%% else condition
// if(a > f){
//     console.log(a + " is greater than " + f); // a = 10, b = 10 so condition is false. no output.
    
// }

// else{
//     console.log(f + " is greater than " + a); // a = 10, f = 50, so condition is true. get output. 
// }

// if (f%2 === 1) {
//         console.log("f is even number"); // get output. because condition is true. 
//     }
//     else {
//         console.log("f is odd number"); // no output. because condition is false. 
//     }

// %%%% else if condition

// if(a > b){
//     console.log(a + " is greater than " + a); // a = 10, b = 10 so condition is false. no output.
    
// }

// else if( b < a){
//     console.log(a + " is greater than " + a); // a = 10, b = 10, so condition is false. no  output. 
// }
// else {
//     console.log('Both are same number. '); // output here. 
    
// }


// if (f%2 === 1) {
//     console.log("f is odd number"); // no output. because condition is false. 
// }
// else if( f%2 === 0) {
//     console.log("f is even number"); // get output. because condition is true. 
// }
// else {
//     console.log('f is zero'); // no need to execute.   
// }

// %%% js switch statement

// var date = new Date();
// var today = date.getDay();
// switch (today) { // when we use a unvalid number like 9 into value then it will show default case. 
//     case 0:
//         console.log('Today is Sunday');
//         break;
//     case 1:
//             console.log('Today is Monday');
//             break;
//     case 2:
//         console.log('Today is Tuesday');
//         break;
//     case 3:
//         console.log('Today is Wednesday');
//         break;
//     case 4:
//         console.log('Today is Thursday');
//         break;
//     case 5:
//         console.log('Today is Friday');
//         break;
//     case 6:
//         console.log('Today is Saturday');
//         break;

//     default:
//         console.log('Nothing Found');
        
//         break;
// }


// js logical operator

let aa = 12;
let bb = 13; 
let cc = 14; 
let dd = 20;

// if (aa > bb && cc > dd) {
//     console.log('aa is greater than bb and cc is greater than dd');
// }
// else{
//     console.log('at least one condition is false. '); // print this line. output here.   
// }
// if (aa < bb && cc > dd) {
//     console.log('aa is greater than bb and cc is greater than dd');
// }
// else{
//     console.log('at least one condition is false. '); // print this line. output here.   
// }

// if (aa > bb && cc < dd) {
//     console.log('aa is greater than bb and cc is greater than dd');
// }
// else{
//     console.log('at least one condition is false. '); // print this line. output here.   
// }
// if (aa <= bb && cc <= dd) {
//     console.log('aa is greater than bb and cc is greater than dd'); // print this line. output here. this condition is true. 
// }
// else{
//     console.log('at least one condition is false. ');    
// }
// if (aa >= bb && cc >= dd) {
//     console.log('aa is greater than bb and cc is greater than dd');   
// }
// else{
//     console.log('at least one condition is false. ');   // print this line. output here.  
// }
if (aa <= bb && cc >= dd) {
    console.log('aa is greater than bb and cc is greater than dd'); // print this line. output here. this condition is true. 
}
else{
    console.log('at least one condition is false. ');    
}
if (aa != bb && cc != dd) {
    console.log('aa is greater than bb and cc is greater than dd');   
}
else{
    console.log('at least one condition is false. ');   // print this line. output here.  
}



















































