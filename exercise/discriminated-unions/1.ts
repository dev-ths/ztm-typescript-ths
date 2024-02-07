// Write a program that calculates the total area of different shapes using
// discriminated unions. Include support for at least squares, rectangles, and
// circles. The functionality to calculate the area of each shape should exist
// in a single function and the function should select the appropriate
// calculation based on the disciminator.
//
// The area of a square: side^2
// The area of a rectangle: width * height
// The area of a circle: Math.PI * radius^2
//
// Make these assertions to check your code:
// - Square with side length of 5 has an area of 25
// - Rectangle with width of 4 and height of 6 has an area of 24
// - Circle with radius of 3 has an area of Math.PI * 9

import { strict as assert } from "assert";

type Shape = 
| {kind: "square"; side: number}
| {kind: "rectangle"; height: number; width: number;}
| {kind: "circle"; radius: number}

const square:Shape = {
  kind: "square",
  side: 17
}

const rectangle:Shape = {
  kind: "rectangle",
  height: 9,
  width: 4
}

const circle:Shape = {
  kind: "circle",
  radius: 32
}

function calculateArea(shape:Shape):number {
  const squareArea = (side:number):number => side^2
  const rectangleArea = (height:number,width:number):number => height*width
  const circleArea = (radius:number):number => radius*Math.PI

  switch(shape.kind) {
    case "square":
      return squareArea(shape.side)
    case "rectangle":
      return rectangleArea(shape.height,shape.width)
    case "circle":
      return circleArea(shape.radius)
    default:
      return 0
  }
}

console.log("new actions");

console.log(calculateArea(circle))
console.log(calculateArea(square))
console.log(calculateArea(rectangle))