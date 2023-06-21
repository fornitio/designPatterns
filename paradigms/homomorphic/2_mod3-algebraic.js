// Define an algebraic structure for integers modulo 3
class Mod3 {
  constructor(x) {
    this.value = x % 3;
  }
  
  // Define addition for this structure
  add(other) {
    return new Mod3(this.value + other.value);
  }
  
  // Define multiplication for this structure
  mul(other) {
    return new Mod3(this.value * other.value);
  }
}

// Create some elements of the structure
const x = new Mod3(1);
const y = new Mod3(2);

// Perform algebraic operations on them
const z = x.add(y); // z is a new Mod3 object with value 0
const w = x.mul(y); // w is a new Mod3 object with value 2
