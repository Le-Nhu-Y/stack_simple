"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(9);
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
