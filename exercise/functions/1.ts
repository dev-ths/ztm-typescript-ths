// Using functions and template literals, print out your first and last name.
//
// Requirements:
// - Use a single function to generate your first name
// - Use a single function to generate your last name
// - Use a single function to generate your full name by using the other
//   functions
// - Print out your full name using the functions

import { strict as assert } from "assert";

function firstName (word:string):string {
  return word
}

function lastName (word:string):string {
  return word
}

function fullName(word1:string, word2:string):string {
  return `${word1} ${word2}`
}

firstName("Alpha")
lastName("Alpha")
fullName("Alpha","Vo")

const firstNameExpression = (word:string):string=>word
const lastNameExpression= (word:string):string=>word
const fullNameExpression= (word1:string,word2:string):string=>`${word1} ${word2}`

const first = firstNameExpression("Alpha")
const last = lastNameExpression("Alpha")
const full = fullNameExpression("Alpha","Vo")
console.log(first,last,full)
assert.equal(full,"Alpha Voss")

const firstNameFn = (fn:()=>(name:string)=>name):string