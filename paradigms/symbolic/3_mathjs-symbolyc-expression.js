const assert = require('assert');

const { createExpression } = require('mathjs');

const x = createExpression('x');
const y = createExpression('y');

const z = createExpression('x * y + sin(y)');

assert.strictEqual(z.toString(), 'x * y + sin(y)');

const result = z.evaluate({ x: 2, y: 3 });

assert.strictEqual(result, 5.141120008059867);

/*
createExpression function from the mathjs library is used to create symbolic expressions for the variables x, y, and z. The expression for z is defined using the x and y variables and the sin function. The evaluate method is used to evaluate the expression for specific values of x and y. This allows the program to manipulate and evaluate symbolic expressions in a concise and expressive way.
*/
