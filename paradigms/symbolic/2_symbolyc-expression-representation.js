const assert = require('assert');

const x = Symbol('x');
const y = Symbol('y');

const expressions = {
  [x]: 5,
  [y]: 2,
  [Symbol.for('+')]: (a, b) => a + b,
  [Symbol.for('-')]: (a, b) => a - b,
  [Symbol.for('*')]: (a, b) => a * b,
  [Symbol.for('/')]: (a, b) => a / b,
};

const evaluate = (expression) => {
  if (typeof expression === 'number') {
    return expression;
  } else if (typeof expression === 'symbol') {
    return expressions[expression];
  } else if (Array.isArray(expression)) {
    const [operator, ...operands] = expression;
    return expressions[operator](...operands.map(evaluate));
  }
};

assert.equal(evaluate([Symbol.for('+'), x, y]), 7);
assert.equal(evaluate([Symbol.for('*'), x, y]), 10);
assert.equal(evaluate([Symbol.for('/'), x, y]), 2.5);

/*
expressions object maps symbols to values or functions. The evaluate function takes an expression as an argument and returns its value by looking up the symbols in the expressions object and applying the corresponding functions to the operands. This allows the expressions to be represented in a symbolic way, using symbols and expressions rather than imperative statements.
*/
