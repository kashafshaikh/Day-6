
// 1. *Functional Programming Aproach: *
  // - Write function for each operation: add, subtract, divide, multiply.
  // implement a function calculate that takes two numbers and an operation (as a string) and returns the result of the operation.

  const calculate = (a: number, b: number, operation: string): number | string => {
    switch (operation) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        case 'multiply': return a * b;
        case 'divide': return b !== 0 ? a / b : "Error: Division by zero";
        default: return "Invalid operation";
    }
};

// Example usage
console.log(calculate(10, 5, 'add'));        // Output: 15
console.log(calculate(10, 5, 'subtract'));   // Output: 5
console.log(calculate(10, 5, 'multiply'));   // Output: 50
console.log(calculate(10, 5, 'divide'));     // Output: 2
console.log(calculate(10, 0, 'divide'));     // Output: Error: Division by zero
console.log(calculate(10, 5, 'modulus'));    // Output: Invalid operation


 // 2. *Object-Oriented Programming (OOP) Approach:*
 //    - Create a Calculator class with methods for each operation.
//    - Implement a method calculate in the class that takes two numbers and an operation (as a string) and returns the result of the operation.

 class CalculateNumber{
   add(num1 : number, num2 : number){
    console.log (num1 + num2);
   }
   subtract(num1 : number, num2 : number){
    console.log (num1 - num2);
   }
   division(num1 : number, num2 : number){
    console.log (num1 / num2);
   }
   multiply(num1 : number, num2 : number){
    console.log (num1 * num2);
   }
 }
const newCal =  new CalculateNumber();
newCal.add(2,2);  //output 4
newCal.division(2,2);  //output 1
newCal.multiply(2,2);  //output 4
newCal.subtract(2,2);  //output 0

// Question 12: Separate Elements by Type

// *Task:*
// Given an array with mixed types of elements, separate them into different arrays based on their type (number, string, boolean).

function SeperateByType (arr: any[]): [string[], boolean[], number[]]{
   let Str: string[] = [];
   let Bool: boolean[] = [];
   let Num : number[] = [];

   for(let i = 0; i<arr.length; i++){
    if (typeof arr[i]==="string"){
      Str.push(arr[i]);
    }
    else if (typeof arr[i] === "boolean"){
     Bool.push(arr[i]);
    }
    else if (typeof arr[i] === "number"){
      Num.push(arr[i]);
     }
   }
   return [Str,Bool,Num];
}
const mixedArray = [2,"helloworld",true,3,false,"hi"];
const [Str,Bool,Num] = SeperateByType(mixedArray);

console.log ("string :", Str);   // string : [ 'helloworld', 'hi' ]
console.log ("boolean :",Bool);  // boolean : [ true, false ]
console.log ("number :", Num);   // number : [ 2, 3 ]










