// Create a queue class that allows items to be placed into the queue and
// removed from the queue. The queue must be generic over all types which
// permits any type of data to be placed into the queue.
//
// The queue requires the following:
// - Ability to add items to the queue
// - Ability to remove items to the queue
// - FIFO ordering. The first item added is the first item removed.
// - Functionality to view all items that exist in the queue
//
// To confirm that your queue works properly, perform these steps:
// 1. Create a queue over the string type
// 2. Add "Hello" to the queue
// 3. Add "World" to the queue
// 4. Take the next item out of the queue
// 5. Assert that the item is the string "Hello"
// 6. View all items in the queue
// 7. Assert that only "World" remains in the queue

import { strict as assert } from "assert";

interface GenericQueue<T> {
  queue: T[]
  addItem(item:T): T | undefined
  removeItem(): T | undefined
  viewItems(): T[] | []
}

class Queue<T> implements GenericQueue<T> {
  queue: T[] = []
  addItem(item:T): T | undefined {
    this.queue.push(item)
    return this.queue.at(-1)
  }

  removeItem(): T | undefined {
    return this.queue.shift()
  }

  viewItems(): [] | T[] {
    return this.queue
  }
}

const stringObj = new Queue<string>

console.log(stringObj.addItem("hello"))
console.log(stringObj.addItem("world"))
console.log(stringObj.viewItems())
console.log(stringObj.removeItem())
console.log(stringObj.addItem("what"))
console.log(stringObj.addItem("yes"))
console.log(stringObj.removeItem())
console.log(stringObj.viewItems())

