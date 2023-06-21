const myRandom = () => {
  // Use a seed value or current time as the starting point for the random number generator
  let seed = Date.now() || 42;
  // Implement a simple linear congruential generator (LCG) algorithm to generate random numbers
  seed = (seed * 9301 + 49297) % 233280;
  const randomNumber = seed / 233280;
  return randomNumber;
};
/*
myRandom() function uses a simple linear congruential generator (LCG) algorithm to generate a random number between 0 and 1. The LCG algorithm uses a seed value (in this case, the current time or a fixed value) as the starting point for the random number generator, and then applies a series of mathematical operations to the seed to produce a new random number
*/
