// Write a generic function that can calculate the average of numbers in an
// array. The function should operate on types that are compatible with
// numbers, but should not work on non-numeric types, such as strings or
// booleans.
//
// To calculate an average:
// 1. Sum the numbers in the array
// 2. Divide the sum by the number of elements
//
// To confirm that your program runs as expected:
// 1. Run your function on the given `numbers` array
// 2. Assert that the average is 3

// import { strict as assert } from "assert";

const arrNumber: number[] = [1, 2, 3, 4, 5];
const arrNumberString: string[] = ["1", "2", "3", "4"];
const arrString: string[] = ["david","what","team"]
const arrBoolean: boolean[] = [true,false,false,true]
// eslint-disable-next-line @typescript-eslint/array-type
const arrUndefinedNull: (undefined | null)[] = [null,undefined,undefined,null]
const arrMixed: Array<string|number|null> = ["saving",null,"call",15,96,"maybe",null]

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function genericSingleTypeArray<A>(arr:A[]):A[]{
  const data = arr
  return data
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function genericSingleTypeElement<A>(arr:A[]):A{
  const data = arr[0]
  return data
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function genericMixedTypeArray<A>(arr:A[]):A[]{
  const data = arr
  return data
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function genericMixedTypeElement<A>(arr:A[]):A{
  const data = arr[0]
  return data
}

console.log(genericSingleTypeArray(arrBoolean))
console.log(genericSingleTypeElement(arrBoolean))
console.log(genericMixedTypeArray(arrUndefinedNull))
console.log(genericMixedTypeElement(arrUndefinedNull))

console.log(genericSingleTypeArray(arrMixed))
console.log(genericSingleTypeElement(arrMixed))
console.log(genericMixedTypeArray(arrMixed))
console.log(genericMixedTypeElement(arrMixed))

function arrMissMatchMixedTypeArray<G>(arr:G[]):string[]{
  const data = arr.map((item)=>String(item))
  return data
}

function arrMissMatchMixedTypeElement<G>(arr:G[]):string{
  const data = String(arr[0])
  return data
}

function arrMixedTypeArray<G>(arr:G[]):G[]{
  const data = arr
  return data
}

function arrMixedTypeElement<G>(arr:G[]):G{
  const data = arr[2]
  return data
}
type chicken = string
function arrExtendedGeneric<G extends chicken>(arr:G[]):number{
  const data: chicken = String(arr[2])
  return Number(data)
}

function arrMixedTypeVoid<G>(arr:G[]):void{
  const data = arr[2]

}

console.log(arrMissMatchMixedTypeArray(arrMixed))
console.log(arrMissMatchMixedTypeElement(arrUndefinedNull))
console.log(arrMixedTypeArray(arrUndefinedNull))
console.log(arrMixedTypeElement(arrUndefinedNull))
console.log(arrMixedTypeVoid(arrUndefinedNull))
// console.log(arrExtendedGeneric(arrUndefinedNull))
console.log(arrExtendedGeneric(arrNumberString))



