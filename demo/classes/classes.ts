/* eslint-disable */
import { strict as assert } from "assert";

// Classes are a way to define blueprints for objects. They encapsulate data
// and behavior and can be used to create instances of objects with predefined
// properties and methods. Classes can be extended and inherited, allowing for
// the creation of complex object hierarchies.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/classes.html

class Color {
  r: number = 0
  g: number = 0
  b: number = 0
}

const red = new Color()
red.r = 255
const {r} = red
console.log(r);

class Dimension {
  length:number
  width:number

  constructor(length:number,width:number,public height:number){
    this.length = length
    this.width = width
    this.height = height
  }
}

const dim1 = new Dimension(5,22,16)
const dim2 = new Dimension(55,75,12)
console.log(dim1,dim2);
