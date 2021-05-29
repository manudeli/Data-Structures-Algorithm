// Stacks are of last in first out type of service

// Examples

/* 1. Books :: The topmost book in the stack was the one that you put there last
 if you remove that book from your stack */

/* 2. Browsers back button */

// functions: push, pop, peek, length

let letters = []; // this is our Stack

let word = "racecar";

let reverseWord = "";

// Put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// Pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  reverseWord += letters.pop();
}

if (reverseWord === word) {
  console.log(word + " is a palindrome");
}

if (reverseWord !== word) {
  console.log(word + " is not a palindrome");
}

// ::: Creates a Stack :::
let Stack = function () {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  // Returns the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack, myStack.peek());
console.log(myStack, myStack.pop());
console.log(myStack, myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack, myStack.size());
console.log(myStack, myStack.peek());
console.log(myStack, myStack.pop());
console.log(myStack, myStack.peek());
