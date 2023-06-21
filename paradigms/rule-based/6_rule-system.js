/*
RuleSystem class defines a set of rules that are stored in an array. The addRule method allows you to add new rules to the system, and the execute method iterates through the rules and executes the action of the first rule whose condition is satisfied by the input
*/
class Rule {
  constructor(condition, action) {
    this.condition = condition;
    this.consequence = action;
  }
}

class RuleSystem {
  constructor() {
    this.rules = [];
  }

  addRule(rule) {
    this.rules.push(rule);
  }

  execute(input) {
    for (const rule of this.rules) {
      if (rule.condition(input)) {
        rule.consequence(input);
        break;
      }
    }
  }
}

const ruleSystem = new RuleSystem();

ruleSystem.addRule(new Rule(
  input => input > 10,
  input => console.log(`Input is greater than 10: ${input}`)
));

ruleSystem.addRule(new Rule(
  input => input < 10,
  input => console.log(`Input is less than 10: ${input}`)
));

ruleSystem.execute(7);  // Output: Input is less than 10: 7
ruleSystem.execute(12); // Output: Input is greater than 10: 12
