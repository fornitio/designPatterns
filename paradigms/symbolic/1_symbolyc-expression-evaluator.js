/*
Symbolic programming is a paradigm that involves the use of symbols and expressions to represent data and computations. It is often used in artificial intelligence and machine learning applications and relies on the use of symbolic languages such as Prolog and Mercury.
*/
const assert = require('assert');

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const evalExpr = (expr) => {
  if (typeof expr === 'number') {
    return expr;
  }

  if (Array.isArray(expr)) {
    const [op, ...args] = expr;
    return evalExpr(op)(...args.map(evalExpr));
  }

  throw new Error(`Invalid expression: ${expr}`);
};

assert.equal(evalExpr(2), 2);
assert.equal(evalExpr([add, 2, 3]), 5);
assert.equal(evalExpr([multiply, [add, 2, 3], [subtract, 5, 1]]), 14);
assert.equal(evalExpr([divide, [multiply, [add, 2, 3], [subtract, 5, 1]], 2]), 7);

/*
evalExpr function is a symbolic evaluator that takes an expression and returns its value. The expression can be a number or an array that represents an operation and its arguments. The evaluator uses recursive function calls and pattern matching to evaluate the expression and return the result. This allows the evaluator to represent data and computations in a symbolic way and manipulate them using functions and expressions
*/
