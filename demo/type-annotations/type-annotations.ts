/* eslint-disable */
import { strict as assert } from "assert";

// Type annotations are used to provide type information for variables,
// functions, and other data structures in a program. By adding type
// annotations, you can specify the expected types of data and prevent errors
// that could occur from using the wrong type. This allows for better code
// reliability, maintainability, and readability.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables
const myArr = []

myArr.pop()

const myObj = {
  something: 'yes'
}

const myName = "Jason"
const myNumber = 15

function sum(lhs: number, rhs:number):number{
  const total = lhs + rhs
  return total
}

const answer:number = sum(sum(1,5),sum(8,1))
