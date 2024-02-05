// Using at least one ternary operator, create a program that can convert
// Celsius and Fahrenheit temperatures.
//
// To convert °C to °F: (°C * 1.8) + 32
// To convert °F to °C: (°F - 32) / 1.8
//
// To confirm that your program works properly, do the following:
// 1. convert 25°C to °F, and assert that the value is 77
// 1. convert 68°F to °C, and assert that the value is 20

import { strict as assert } from "assert";

const celsiusToFahrenheit = (temperature:number):number => (temperature * 1.8) + 32
const fahrenheitToCelsius = (temperature:number):number => (temperature - 32) / 1.8
const isCelsius = true
const isFahrenheit = !isCelsius

const newFahrenheit = isCelsius ? celsiusToFahrenheit(25) : null
const newCelsius = !isFahrenheit ? fahrenheitToCelsius(68) : null

console.log("fah", newFahrenheit);
console.log("cel", newCelsius); 