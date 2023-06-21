const rules = [
  {
    condition: (input) => input % 2 === 0,
    action: (input) => console.log(`${input} is even`)
  },
  {
    condition: (input) => input % 2 !== 0,
    action: (input) => console.log(`${input} is odd`)
  }
];

const applyRule = (input) => {
  const applicableRule = rules.find((rule) => rule.condition(input));
  applicableRule.action(input);
};

applyRule(4); // prints "4 is even"
applyRule(5); // prints "5 is odd"

/*
rules array contains objects that represent rules with a condition function and an action function. The applyRule function takes an input and searches the rules array for a rule whose condition function returns true when passed the input. If a matching rule is found, the action function of that rule is invoked with the input. In this case, the program defines two rules: one for even numbers and one for odd numbers. The applyRule function can be called with any number, and it will determine whether the number is even or odd and print the appropriate message.

*/
