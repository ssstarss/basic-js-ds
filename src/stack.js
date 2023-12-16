const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
     this.array = [];
  }
  push(element) {
    this.array.push(element);
  }

  pop() {
    return this.array.pop();
    
  }

  peek() {
   return this.array[this.array.length-1];
  }
}
stack = new Stack;

stack.push(5);
    stack.push(6);
    stack.push(7);
    console.log(stack.peek());
    console.log(stack.pop());
    console.log(stack.peek());

module.exports = {
  Stack
};
