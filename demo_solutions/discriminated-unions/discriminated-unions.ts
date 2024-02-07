/* eslint-disable */

// Discriminated unions are a way to declare a type that can have
// different properties or behaviors based on a specific discriminator property.
// Discriminated unions can be defined using the intersection of a set of types
// with a common property, and the property value can be used to determine which
// type to use.

// We can also use entire objects. Using objects creates
// a 'discriminated union'. Unions only allow the type to be one
// option at a time. Combining this with objects allows multiple
// pieces of data to be associated with each individual option.
//

type numbers = 1 | 2 | 3;

type AccountCreationMessage =
  | { kind: "ok"; greeting: string }
  | { kind: "passwordComplexityFailure"; message: string }
  | { kind: "usernameExists" };

// Create a few objects using the disciminated union:
const ok: AccountCreationMessage = {
  kind: "ok",
  greeting: "Welcome to the platform!",
};
const passwordTooShort: AccountCreationMessage = {
  kind: "passwordComplexityFailure",
  message: "Password must be at least 10 characters",
};
const passwordTooEasy: AccountCreationMessage = {
  kind: "passwordComplexityFailure",
  message: "Password must contain a number",
};
const duplicateUsername: AccountCreationMessage = { kind: "usernameExists" };

function showMessage(msg: AccountCreationMessage) {
  // We can now switch on the union to retrieve data associated
  // with each option:
  switch (msg.kind) {
    case "ok":
      console.log(`${msg.greeting}`);
      break;
    case "passwordComplexityFailure":
      console.log(`${msg.message}`);
      break;
    case "usernameExists":
      console.log("That username already exists");
      break;
  }
}

//showMessage(ok);

type DiscriminatedStuff = 
| {stuff: "yes"; other1:number}
| {stuff: "MegaCool"; other2:boolean}
| {stuff: 1605406; other3:number }

const disc1:DiscriminatedStuff = {
  stuff: "yes",
  other1: 15
}

const disc2:DiscriminatedStuff = {
  stuff: "MegaCool",
  other2: false
}

const disc3:DiscriminatedStuff = {
  stuff: 1605406,
  other3: 55
}

interface Holder {
  discrim: DiscriminatedStuff
  age:number
  bark():string
}

const discriminatedInterfaceObject1:Holder = {
  discrim: {
    stuff: "yes",
    other1: 15
  },
  age: 27,
  bark(){
    return String(this.age)
  }
}

console.log(discriminatedInterfaceObject1.bark())

function discriminateSwitch(msg:DiscriminatedStuff):string {
  switch(msg.stuff) {
    case "yes":
      return String(msg.stuff + 'aaa')
    case "MegaCool":
      return String(msg.stuff + 'bbb')
    case 1605406:
      return String(msg.stuff + 'ccc')
    default:
      return 'something went wrongs'
  }
}

console.log(discriminateSwitch(disc3))
console.log(discriminateSwitch(disc1))
console.log(discriminateSwitch(disc2))