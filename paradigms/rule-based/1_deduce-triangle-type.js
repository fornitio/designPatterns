/*
Rule-based programming is a subtype of logic programming in which the program is a set of rules that describe how to deduce the values of certain variables based on the values of other variables
*/
function triangleType(side1, side2, side3) {
  switch (true) {
    case side1 === side2 && side2 === side3:
      return "equilateral";
    case side1 === side2 || side2 === side3 || side1 === side3:
      return "isosceles";
    default:
      return "scalene";
  }
}

console.log(triangleType(3, 3, 3)); // "equilateral"
console.log(triangleType(3, 3, 4)); // "isosceles"
console.log(triangleType(3, 4, 5)); // "scalene"
/*
 switch statement has a single case clause for each possible type of triangle, and the default clause handles all other cases. The program determines the type of triangle by evaluating the case clauses in order until one of them is found to be true
*/