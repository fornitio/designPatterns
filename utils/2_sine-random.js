const customRandom = () => {
  const x = Math.sin(Date.now()) * 10000;
  return x - Math.floor(x);
};

console.log(customRandom());  // Output: a random number between 0 and 1
/*
customRandom() function generates a random number between 0 and 1 by taking the sine of the current time (measured in milliseconds) and multiplying it by 10000, and then subtracting the integer part of the result using Math.floor(). This creates a random number that varies over time, based on the changing value of the current time.
*/
