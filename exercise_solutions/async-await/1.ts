// Write an asynchronous function that calls the existing getUser function and
// prints out the user's name.
//
// Note: The getUser function fails randomly. Make sure your function is able
// to handle a failure scenario by printing out what went wrong.
import { strict as assert } from "assert";

interface User {
  id: number
  name: string
}

async function getUser(): Promise<User> {
  return await new Promise((resolve, reject) => {
    const [time1, time2] = [Math.floor(Math.random() * 200), Math.floor(Math.random() * 200)];

    setTimeout(() => {
      resolve({ id: 1, name: "John" });
    }, time1);
    setTimeout(() => {
      reject(new Error("failed to located user"));
    }, time2);
  });
}

async function fetchUserData(): Promise<User | undefined> {
  try {
    const user = await getUser();
    console.log(`${user.name}`)
    return user;
  } catch (error) {
    console.log("Error fetching user data:", error);
    return undefined;
  }
}

// fetchUserData();

const data = new Promise((resolve,reject)=>{
  resolve("yes")
})

async function top():Promise<void>{
const data = new Promise((resolve,reject)=>{
  resolve("yes")
})
const holder = await getData(data)
console.log(holder)
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/return-await
const getData = async(promiseItem):Promise<string> => await promiseItem

top()