/*
Aspect-oriented programming (AOP) is a programming paradigm that focuses on the separation of cross-cutting concerns, such as logging and error handling, from the main logic of a program. It allows developers to modularize these concerns and apply them to multiple parts of the program without duplicating code.
*/

class Logger {
  static log(target, name, descriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args) {
      console.log(`${name} called with args: ${args}`);
      return original.apply(this, args);
    };
    return descriptor;
  }
}

class Calculator {
  @Logger.log
  add(x, y) {
    return x + y;
  }

  @Logger.log
  subtract(x, y) {
    return x - y;
  }
}

const calculator = new Calculator();

calculator.add(1, 2);  // Output: "add called with args: 1, 2"
calculator.subtract(1, 2);  // Output: "subtract called with args: 1, 2"

/*
Logger class defines a log method that takes a target, a name, and a descriptor as arguments. The log method modifies the original method by wrapping it in a new function that logs the name of the method and its arguments before calling the original method. The @Logger.log decorator is used to apply the log method to the add and subtract methods of the Calculator class, effectively separating the logging concern from the main logic of the calculator. This allows the logging behavior to be applied to multiple methods without duplicating code
*/
