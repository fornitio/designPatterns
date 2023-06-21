const randomNormal = () => {
  let u1, u2, z;
  u1 = Math.random();
  u2 = Math.random();
  z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  return z;
};

console.log(randomNormal());  // Output: a random number with a normal distribution

/*
randomNormal() function generates two random numbers between 0 and 1 using the built-in Math.random() function, and then applies the Box-Muller transform to these numbers to generate a random number with a normal distribution. The resulting number is returned by the function.

This custom randomNormal() function can be used to generate random numbers with a normal distribution (also known as a Gaussian distribution) with a mean of 0 and a standard deviation of 1. You can modify the function to specify a different mean and standard deviation by applying appropriate scaling and shifting to the resulting random number

*/
