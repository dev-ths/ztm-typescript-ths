/* eslint-disable */

import { log } from "console";

// Arrow functions provide a concise syntax for defining functions. They are
// defined using a fat arrow (=>) and can be used in place of traditional
// function expressions. Arrow functions automatically bind the 'this' keyword
// to the parent context, making them useful in event handlers and callback
// functions. They also support implicit return statements for one-liner
// functions, which makes the code more readable.

// Create a function expression / anonymous function:
const sum = function (lhs: number, rhs: number): number {
  return lhs + rhs;
};

// The same as above, using arrow function syntax:
const arrowSum = (lhs: number, rhs: number): number => {
  return lhs + rhs;
};

// Both functions can be called the same way:
const two = sum(1, 1);
const four = arrowSum(2, 2);

// This is useful for defining functions within functions.
//
// You should prefer to always use arrow functions in all contexts
// _except_ when you define a "regular" function:
function regularFunction() {}

// Everywhere else should use arrow functions:
const arrowFunction = () => {};

// We can also use function expressions to call functions with functions.

// Type alias for a function which can perform basic calculations.
// Notice there is no function body. It will be defined later.
type calculationFn = (lhs: number, rhs: number) => number;

// `calculate` function accepts the above type alias along with two numbers.
function calculate(fn: calculationFn, lhs: number, rhs: number): number {
  // `fn` is a function (or function expression) with signature
  // `(number, number): number`. This allows us to forward the `lhs` and `rhs`
  // passed to `calculate` to the `calculationFn`.
  //
  // Call like we would any other function:
  return fn(lhs, rhs);
}

/* const calculateMore = (fn1:(calculationFn)=>number,fn2:(calculationFn)=>number)
 */

type singleCurryVariable = (a:number) => (b:number)=>number

const topLevelCurryingOperation = (fn:singleCurryVariable) => {
  return fn
}

const deletionOperation = (a:number)=> (b:number) => { return b - a}

//console.log(topLevelCurryingOperation(deletionOperation))

const curryDelete = topLevelCurryingOperation(deletionOperation)

console.log(curryDelete)
const deleteBy5 = curryDelete(5)

console.log(deleteBy5(17))
console.log(deleteBy5(100))

const differentCalculation  = (fn: calculationFn,x:number, y:number) => {
  return fn(x,y)
}

const additionFunction = (a:number,b:number) => a + b
const subtractionFunction = (a:number,b:number) => a - b

const param1 = parseInt('15')
const param2 = parseInt('27')

console.log(differentCalculation(additionFunction,param1,param2))
console.log(differentCalculation(subtractionFunction,param1,param2))

const nonTypeFunction = (fn:(a:number,b:number)=>number,a:number,b:number) => fn(a,b)

console.log('nonadd',nonTypeFunction(additionFunction,param1,param2))
console.log('nonsub',nonTypeFunction(subtractionFunction,param1,param2))
