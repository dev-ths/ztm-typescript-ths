// Your task is to create a class that only allows text input up to a certain
// length. This length-restricted class will be used to ensure that users do
// not enter too much information into an input field.
//
// Requirements:
// - Create a class containing a length-limited string 
// - The class should not allow instantiation with strings greater than the
//   specified length
// - The class should allow setting the maximum string length
// - Throw an exception in the constructor of the class if the string is over
//   the maximum length

import { strict as assert } from "assert";
import { max } from "../../demo_solutions/dts/mylib";

type ErrorMessage = string
type MaximumMessageLength = number

interface ErrorLengthRetriction {
  message: ErrorMessage
  maxLength: MaximumMessageLength
}

class RestrictedError implements ErrorLengthRetriction {
  message: string;
  maxLength: number;
  constructor(message="",maxLength=10){
    this.message = message
    this.maxLength = maxLength
    // eslint-disable-next-line no-useless-catch
    try {
      this.#isValidMessage()
    } catch (error) {
      console.log(error)
    }
  }

  #isValidMessage():void {
    if (this.message.length > this.maxLength) {
      throw new Error("Message too long")
    }
  }

  setMessage(ErrorMessage=""):string {
    // eslint-disable-next-line no-useless-catch
    try{
      this.message = ErrorMessage
      this.#isValidMessage()
    } catch (error) {
      console.log(error)
    }

    return this.message
  }
}

const error1 = new RestrictedError("hello",15)
console.log(error1.message)
error1.setMessage("what")
console.log(error1.message)
error1.setMessage("aierosntaeosirntoiaersnteioarsntoiaernstioeasrntieonarot")






/* 
class LengthRestricted {
  value: string;
  constructor(input: string, maxLength: number) {
    if (input.length > maxLength) {
      throw new Error(`input string '${input}' exceeds max length of ${maxLength}`);
    } else {
      this.value = input;
    }
  }
}

const ok = new LengthRestricted("ok", 5);

assert.throws(() => {
  const crash = new LengthRestricted("crash", 2);
});

 */