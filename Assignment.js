
// => I have solved these questions below.

// ====================================================================================================================================

// Problem 1: Write a function to calculate the area of a triangle.
// Answer below.....................................

// function allAreas(leftSide, rightSide, buttomSide) {
//   let perimeter = (leftSide + rightSide + buttomSide) / 2;
//   let area = Math.sqrt(perimeter * ((perimeter - leftSide) * (perimeter - rightSide) * (perimeter - buttomSide)));
//   return area;
// }

// let area = (allAreas(5, 6, 7));

// console.log(area);

// ====================================================================================================================================

// Problem 2: Write a function to convert degrees to radians.
// Answer below....
// function conDegrees(digree) {
//   let PI = 3.14159265359;
//   let result = digree * (PI / 180);
//   return result;
// }
// let redians = conDegrees(90);
// console.log("Redians is: " + redians);

// ====================================================================================================================================

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
// Answer below.....................................


// function calculateFactorial(number){
//   if (number==0){
//     console.log(`The Factorial ${number} is equal  1`)
//   }else if(number<0){
//     console.log(`The Factorial ${number} is not valid`)
//   }else{
//     let factorialis=1;
//     for(let i=1; i<=number; i++){
//       factorialis= factorialis*i;
      
//     }
//     return factorialis;
//   }
// }

// let result=calculateFactorial(5);

// console.log(result);

// ====================================================================================================================================

// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
// Answer below.....................................


// function isPrime(number) {
//   if (number===1) {
//     return false;
//     console.log(false);
//   } else if(number===2){
//         return true;
//   } else {
//     for (let x = 3; x < number; x++){
//       if (number % x == 0) {
//         return false;
//       }else{
//         return true;
//       }

//     }
//   }
//   return true;
// }

// let y = isPrime(21);
// console.log(y);

// ====================================================================================================================================


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
// Answer below.....................................

// function mergeArrays(array1, array2) {
//   let brands = (array1.concat(array2));
//   return brands;
// }

// let car = ["Volvo", "Toyota", "BMW"];
// let phone = ["iphone", "Samsung", "Nokia"];

// let result = mergeArrays(car, phone);
// console.log(result);

// ====================================================================================================================================

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
// Answer below.....................................

// function isLeapYear(years) {
//   if (years % 400 === 0 || (years % 4 === 0 && years % 100 !== 0)) {
//     return "This is a leap year";
//   } else {
//     return "Not Leap year";
//   }
// }

// console.log(isLeapYear(2017));

// ====================================================================================================================================

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
// Answer below.....................................

// function removeDuplicates(phones) {
//   const uniqueSet = new Set(phones);
//   const uniqueArray = Array.from(uniqueSet);
//   return uniqueArray;
// }

// let phone = ["Motorola","iphone", "Samsung", "Nokia","Motorola","Samsung","Vodafone"];
// const uniqueArray = removeDuplicates(phone);

// console.log(uniqueArray);

// ====================================================================================================================================

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
// Answer below.....................................

// function convertToCelsius(fTemp) {
//   let toCalculate = (fTemp - 32) * 5 / 9;
//   return toCalculate.toFixed(2);
// }

// let toCalculate = convertToCelsius(35.6);
// console.log(toCalculate);
// ====================================================================================================================================

// Problem 9: Write a function to find the maximum of five numbers.

// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
// Answer below.....................................

// function evenOdd(name) {
//   let count = name.length;
//   if (count % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }


// let result = evenOdd("JavaScript");
// console.log(result);

// ====================================================================================================================================

// => Answer any 4 questions.

// ====================================================================================================================================

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.
```Ans: 'if...else' are Conditional statements to getting different action from different conditions.on the other side 'switch' is same as like 'if...else' but in switch statement we have to use some different syntax.For example..Sometimes, we can use 'break' in 'if...else' if we need othewise not but on the other side mandetory to use 'break' in 'switch' conditions at last in 'switch' we need to use 'default' as like 'else'.
// // structure is [if, else if, and else] and for switch [switch, case, break and default]```

// ====================================================================================================================================

// 2. What is JavaScript, and what is its primary purpose in web development?
```Ans: JavaScript is a scripting or programming language of the Web. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.```

// ====================================================================================================================================
// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.
```Ans: We know that have some differences in var, let, and const.
  For example...
  Var- Var is the oldest version of a variable to declaring a value. It was used in all JavaScript code from 1995 to 2015. But, have some problems to using var if we use var first after a few lines later if we try to declare a value in the same keyword it will update 
Like 
var name = "Tinku";

{
var name="Pinku";
}
and agian
var name="Rinku";

so finally it will assign Rinku so sometimes it's a problem. and this problem is not only for global variables this problem for also for Block Level Scope. When we apply the same keyword to a variable using var it will change Block Level Scope.

Let- Let is an updated Containers for Storing Data. With the let we could't declaring data in the same keyword but we would able to update date using the same keyword with out let variable. 
For example ...

let name = "Tinku";
for update
name="Rinku";

but this let will not work in "Block Level Scope".

Const- const is like let but have little differences for example using const we can not apply the same keyword to declaring date. It's almost fixed.```


// ====================================================================================================================================
// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.
```And: if we want to know shortly about 'scope'.

Then the scope is ...
"Scope" refers to where variables and functions are accessible in your code.
"Global scope" means they are accessible everywhere in your code.
"Local scope" means they are accessible only within a specific function or block of code.```
// 5. What is the difference between "null" and "undefined" in JavaScript?