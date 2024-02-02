/* eslint-disable */
import { strict as assert } from "assert";

let writing = true
let reading = !writing

const rating = 9
const favouriteMovie = false

const suggestMovie:boolean = rating > 8 || favouriteMovie
assert.equal(suggestMovie,true)

const packageWeight = 30
const packageLength = 20

const feeExemption = false

const payExtraFee = !feeExemption && (packageWeight > 25)