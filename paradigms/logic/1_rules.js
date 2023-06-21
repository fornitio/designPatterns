/*
Logic programming is a programming paradigm that is based on the idea of expressing the relationships between different pieces of data as logical statements and using a logical engine to automatically deduce new conclusions from those statements. It is often used in artificial intelligence and expert systems.
*/
class Rule {
  constructor(name, conditions, actions) {
    this.name = name;
    this.conditions = conditions;
    this.actions = actions;
  }

  async evaluate(facts) {
    if (this.conditions.every((condition) => condition(facts))) {
      await Promise.all(this.actions.map((action) => action(facts)));
      return true;
    }
    return false;
  }
}

class RuleEngine {
  constructor() {
    this.rules = [];
  }

  addRule(rule) {
    this.rules.push(rule);
  }

  async evaluate(facts) {
    let result = false;
    for (const rule of this.rules) {
      result = result || await rule.evaluate(facts);
    }
    return result;
  }
}

const ruleEngine = new RuleEngine();

// Define some rules
const rule1 = new Rule(
  'rule1',
  [
    (facts) => facts.temperature > 30,
    (facts) => facts.humidity > 50
  ],
  [
    (facts) => console.log('It is hot and humid, turn on the air conditioner')
  ]
);

const rule2 = new Rule(
  'rule2',
  [
    (facts) => facts.temperature < 10,
    (facts) => facts.humidity < 30
  ],
  [
    (facts) => console.log('It is cold and dry, turn on the heater')
  ]
);

// Add the rules to the rule engine
ruleEngine.addRule(rule1);
ruleEngine.addRule(rule2);

// Evaluate the rules with some facts
ruleEngine.evaluate({ temperature: 35, humidity: 55 })
  .then((result) => console.log(result ? 'At least one rule was triggered' : 'No rules were triggered'));

/*
Rule class represents a single logical rule with a name, a list of conditions, and a list of actions. The RuleEngine class manages a list of rules and provides a way to evaluate them with a set of facts. When the evaluate method of the RuleEngine is called, it iterates over the rules and evaluates their conditions. If the conditions of a rule are all true, the actions of the rule are executed and the method returns true. If no rules are triggered, the method returns false.
*/
