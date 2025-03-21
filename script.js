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
// if (aa <= bb && cc >= dd) {
//     console.log('aa is greater than bb and cc is greater than dd');  
// }
// else{
//     console.log('at least one condition is false. ');    // print this line. output here.  
// }
// if (aa != bb && cc != dd) {
//     console.log('aa is greater than bb and cc is greater than dd');  // print this line. output here. condition is true.   
// }
// else{
//     console.log('at least one condition is false. ');    
// }


// ####  ternary operator ###### 

// var vd = 12;
// var result = vd % 2 === 0 ? 'Even' : 'Odd'
// //   ------- condition ---- true side : false side 
// console.log(result);

// %%%% logical and or operator %%%%%%

var name = '';
var fullName = '';

// if ( name.lenght = 1){
//     fullName =  "sajal "
// } else{
//     fullName = name  
// }
// console.log(fullName); ( this if else condition can replace with only one line by using or operator)

// fullName = name || 'sajal' // this is or operator . result = sajal . 
// console.log(fullName);

// var isOK = true;
// if (isOK) {
//     console.log("everything is ok"); // if condition is true then this line will print.   
// }

// var isOK = false;
// if (isOK) {
//     console.log('every');  // if condition is false then this line will no print. 
// }  // this line can replace with and operator. 

// isOK = true;
// isOK && console.log('everything is OK') // condition is true, so this line will print. 

// isOK = false;
// isOK && console.log('everything is OK') // condition is false, so this line will not print. 

// $$$$$ js for loop $$$$$$

// for (let index = 0; index < 100; index++) {
//     console.log(index);  
// }

// for (let index = 0; index < 100; index+=10) {
//     // const element = array[index];
//     console.log(index);    
// }

// for (let index = 0; index < 100; index++) {
//     // if (index % 2 === 0) {
//     //     console.log(index);
//     // }  
//     if (index % 2 === 1) {
//         console.log(index);   
//     } 
// }

// for (let index = 0; index > -10; index--) {
//     console.log(index);   
// }

// for (let index = 1; index <= 10; index++) {
//     var sum = 0;
//     sum += index;
//     console.log(sum);    
// }

// var sum = 0;
// for (let index = 1; index <= 10; index++) {
//     sum += index;
//     console.log(sum);    
// }

// var sum = 0;
// for (let index = 1; index <= 10; index++) {
//     var result = sum + index;
//     sum = result;
//     console.log(sum);    
// }

// var sum = 0;
// for (let index = 1; index <= 10; index++) {
//     console.log(sum + ' +' + index + ' =' + (sum +index));    
// }

// var sum = 0;
// for (let index = 1; index <= 10; index++) {
//     console.log(sum + ' + ' + index + ' = ' + (sum +index));
//     sum += index;    
// }

// console.log('result = '  + sum);


// ###### js while loop ########
// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// }

// var isRunning = true;
// while (isRunning) {
//     var num = Math.round(Math.random() * 10 + 1) // also can write math.floor. 
//     if (num === 9) {
//         console.log('Yes ! You win the Lottery. ');
//         isRunning = false;
//     }
//     else{
//         console.log('The number is ' + num);    
//     }
// }



// var isRunning = false;
// while (isRunning) {
//     var num = Math.florr(Math.random() * 10 + 1);
//     if (num === 9) {
//         console.log('Yes ! You win the Lottery. ');
//         isRunning = true;
//     }
//     else{
//         console.log('The number is ' + num);     // no result. condition me be true. 
//     }
// }

// ##### do while loop ####### 

// var isRunning = false;
// do{
//     console.log('i am fine');
    
// }while (isRunning){
//     console.log(isRunning);
// }


// $$$$ nested loops $$$$$$$

var n = 10;  

// for (let i = 0; i <= n; i++) {
//     // console.log(i);
//     var result = ''
//     for (let j = 1; j <= i; j++) {
//     //    console.log(j); 
//     result += j + ' '      
//     } 
//     console.log(result);  
// }

// for (let i = 0; i <= n; i++) {
//     // console.log(i);
//     var result = ''
//     for (let j = 1; j <= n; j++) {
//     //    console.log(j); 
//     result +=  ' *  '      
//     } 
//     console.log(result);  
// }

// for (let i = 0; i <= n; i++) {
//     // console.log(i);
//     var result = ''
//     for (let j = 1; j <= i; j++) {
//     //    console.log(j); 
//     result +=  ' $  '      
//     } 
//     console.log(result);  
// }

// $$$$$ break statement $$$$$$

// var isRunning = true;
// while (true) {
//     var num = Math.round(Math.random() * 10 + 1) // also can write math.floor. 
//     if (num === 9) {
//         console.log('Yes ! You win the Lottery. ');
//         // isRunning = false;
//         break
//     }
//     else{
//         console.log('The number is ' + num);    
//     }
// }


// for (let i = 1; i < 20; i++) {
//     if (i % 3 === 1) {
//         break
//     } else{
//         console.log(i);    // no output
//     }
    
// }

// for (let i = 1; i < 20; i++) {
//     if (i % 3 === 0) {
//         break
//     } else{
//         console.log(i);    // output here
//     } 
    
// }

// &&&&&& js continue statement. &&&&&&

// for (let i = 0; i <= 20; i++) {
//     // const element = array[i];
//     if ( i === 3 || i ===7 || i === 13 ) {  // this line show result. when use && then no skip.
//         continue
//     } else{
//         console.log(i);   
//     }
// }

// ****** js infinity for loop ******

// for ( ; ; ) {
//     var num = Math.round(Math.random() * 10 + 1) // also can write math.floor. 
//     if (num === 9) {
//         console.log('Yes ! You win the Lottery. ');
//         // isRunning = false;
//         break
//     }
//     else{
//         console.log('The number is ' + num);    // output here. 
//     }
// }


//  $$$$$$ string literal vs constructor $$$$$$$

// var str = 'sajal'; // literal 
// var str2 = String('sajal'); // constructor 
// var str2 = String(true); // constructor 
// var str2 = String(100); // constructor 
// console.log(str2);

// var n = 5;
// var n2 = n + ' '
// console.log(n2);   // concate string
// console.log(n + ''); // concatinate string
// var str = n.toString();  // tozString method 
// console.log(str);
// var str = String(n); // constructor 
// var str = new String(n);
// console.log(str); // result is [String: '5']
// console.log(str.toString()); // result is string type

// %%%% js escape notation %%%%%%

// var str = 'I am from \'Bangladesh\'' // add sigle quotation
// var str = 'I am from \\Bangladesh' // add 1 back slash
// var str = 'I am from \nBangladesh' // add new line
// var str = 'I am from \tBangladesh' // add 1 tab
// var str = 'I am from \\\Bangladesh' // take 1 \. not two.
// var str = 'I am from \#Bangladesh' // can use all kind of sign. 
// var str = 'I am from \rBangladesh' // print only bangladesh.  carriage return. 
// var str = 'I am from \vBangladesh' // add one sign before bangladesh. ♂Bangladesh   vertical tab. 
// var str = 'I am from \bBangladesh' // no space between from and bangladesh. fromBangladesh  backspace.
// var str = 'I am from \fBangladesh' // add one sign before bangladesh. ♀Bangladesh  form feed. 
// console.log(str);

// $$$$ js string comparison $$$$$

// var a = 'hddbe'; // greater
// var b = 'bdedbbd'; // smalller. 

// console.log(a === b); // false
// console.log(a > b); // true
// console.log(a < b); // false

// var a = '00123';
// var b = 123;
// console.log(a === b); // false -- type and value check
// console.log(a == b); // true -- value check
// console.log(a > b); // false 
// console.log(a < b); // false

// %%%%% js string method %%%%%%%

// var a = 'i am ';
// var b = 'sajal';
// var c = a.concat(b);
// console.log(c);
// var d = c.substring(5, 8); // after index no 5 take to index no 8.
// var d = c.substring(5,); // after index no 5 take full length. 
// console.log(d);
// console.log(c.charAt(7)); // find out specific character.
// console.log(c.startsWith('i')); // retunns true or false value. 
// console.log(c.endsWith('l')); // returns true or false value. 
// console.log(c.toUpperCase()); // text convert to uppercase
// console.log(c.toLowerCase);  // [Function: toLowerCase] showing result as function. 
// console.log(c.toLowerCase()); // text convert to lowercase
// console.log('      avded      '.trim()); // remove unwanted spaces. 
// console.log(c.split(' ')); // convert string to array based on fixed charecter. [ 'i', 'am', 'sajal' ]
// console.log(c.split('a')); // convert string to array based on fixed charecter. [ 'i ', 'm s', 'j', 'l' ]

// $$$$ js string length %%%%%%

// var ab = 'i am from bangladesh. ';
// var length = 0;
// console.log(ab.charAt(3)); // output a
// console.log(ab.charAt(28)); //  empty string output. 
// var vv = ab.charAt(28)
// console.log(vv); // output empty string.
// console.log(typeof vv); // checking type of variable.

// while (true) {
//     if (ab.charAt(length) == '') {
//         break
//     } else{
//         length++
//     }
// }
// console.log(length);

// $$$$$ js array declaration $$$$$$

// var a = [1, 2, 'a', 'b', 16, true, 'ab']; // using literal 
// a[12] = 34; // adding new index
// a[3] = 67; // replacing existing index
// console.log(a); // 
// console.log(a.length); // checking array length
// console.log(a[8]); //  checking an usassigned index number. 

// another way of declaring array . using constructor.
// var a = Array(1, 3, 4);
// console.log(a);

// $$$$ js array traverse $$$$$
// var a = [21,3, 32, 1, 43, 22, 667];
// var sum = 0;
// console.log(a);
// for (let i = 0; i < a.length; i++) {
//     // const element = array[i];
//     // console.log(a[i]); // this line print array traverse. every element takes one individual line. 
//     // a[i] += a[i] + 4;
//     // console.log(a[i]); // print adding 4 with every element and takes one individual line. 
//     // a[i] = a[i] + 4;
//     // console.log(a); // this console print a adding 4 with every element for 7 times due to array length is 7.
//     // sum += a[i];
//     // console.log(sum); // print every number adding with previous number and takes one line. 
    
// }
// console.log(sum); // this line print total of number for one time. 
// for (i = 0; i < a.length; i++){
//     // if (a[i] % 2 === 0) {
//     //     console.log(a[i]);    
//     // }
//     // if (a[i] % 2 === 1) {
//     //     console.log(a[i]);    
//     // }
//     // sum += a[a[i] % 2 === 1]; // NaN 
//     // sum += a.a[i] % 2 === 1; // error
// }
// console.log(sum);

// $$$$$ js search value $$$$$$

var a = [2,3, 33, 43, 34, 55, 45, 44, 21, 33];
// var find = 43; // data found
// var find = 433; // data not found . 
// isFound = false;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] === find) {
//         console.log('Data found in index no ' + i);
//         isFound = true;
//         break
//     }
    
// }
// if (!isFound) {
//     console.log('Data not found');   
// }

// %%%% js array data insert, remove and replace %%%%%%%%%

// insert *****
// a[3] = 99;
// a.push(98);
// a.unshift(34);
// a.splice(3, 0, 56);
// console.log(a); // all is ok. 

// remove ****

// a[4] = undefined;
// a[4] = null;
// a.shift();
// a.pop();
// a.splice(3, 1, 97);
// console.log(a); // all is ok. 

// ##### multidimentional array #####

// 2 dimentional array ***
// var arr = [
//     [29, 45, 65, 45, 67, 833],
//     [23, 45, 85, 95, 87, 493], 
//     [23, 49, 65, 48, 67, 433]
// ]
// // console.log(arr); showing result as combined array. 
// // console.log(arr[1][3]);
// // console.log(arr[0]);
// // console.log(arr[2][2]); // every line has result. 
// for(var i = 0; i< arr.length; i++){
//     // console.log(arr); // showing result 3 times, because arr has 3 index. 
//     for(var j = 0; j< arr[i].length; j++){
//         // console.log(arr[i]); // print 18 times because arr[i] has total 18 index. 
//         // console.log(arr[i][j]); print every element into the individual array traversely. every element takes one line.     
//         console.log( 'index no ' + i + ': ' + arr[i][j]);
//     }       
// }

// *** 3 dimentional array 

// var arr = [
//     [
//         [2, 45, 543, 333, 64, 34],
//         [2, 45, 543, 333, 64, 34],
//         [2, 45, 543, 333, 64, 34]
//     ],
//     [
//         [2, 45, 543, 333, 64, 34],
//         [2, 45, 543, 333, 64, 34],
//         [2, 45, 543, 333, 64, 34]
//     ],
//     [
//         [2, 45, 543, 333, 64, 34],
//         [2, 45, 543, 333, 64, 34],
//         [2, 45, 543, 333, 64, 34]
//     ]
// ]
// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr[i].length; j++){
//         for(var k = 0; k < arr[i][j].length; k++){
//             // console.log('index no ' + i + ' : ' + arr[i][j][k]);  // yes ! it is working. 
//             // console.log(`arr[${i}][${j}][${k}] = ${arr[i][j][k]}` ); // this line print thtee index no for 3 dimensional array.       
//         }
//     }
// }

// let threeDArray = [
//     [  // First 2D array
//         [1, 2, 3], 
//         [4, 5, 6]
//     ],
//     [  // Second 2D array
//         [7, 8, 9], 
//         [10, 11, 12]
//     ]
// ];

// Logging the entire 3D array
// console.log(threeDArray);

// Accessing a specific element
// console.log(threeDArray[0][1][2]); // Output: 6 (first 2D array, second row, third element)

// Looping through the 3D array
// for (let i = 0; i < threeDArray.length; i++) {
//     for (let j = 0; j < threeDArray[i].length; j++) {
//         for (let k = 0; k < threeDArray[i][j].length; k++) {
//             console.log(`threeDArray[${i}][${j}][${k}] = ${threeDArray[i][j][k]}`);
//         }
//     }
// }


// %%%% js reverse array %%%%%

var aa1 = [1, 2, 3, 4, 4, 5, 2, 5, 6, 7]
// aa1.reverse();
// console.log(aa1);  // this line working. 

// for(var i = 0; i < (aa1.length / 2); i++){
//     var temp = aa1[i];
//     aa1[i] = aa1[aa1.length - 1 - i];
//     aa1[aa1.length - 1 - i] = temp;
// }
// console.log(aa1); // it's working. 











































































