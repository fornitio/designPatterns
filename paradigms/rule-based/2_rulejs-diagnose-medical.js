/*
simple expert system that can diagnose medical conditions based on a set of symptoms
*/
const RuleJS = require('rulejs');

// Define the rules for the expert system
const rules = [
  {
    conditions: {
      fever: true,
      cough: true,
      shortnessOfBreath: true
    },
    conclusion: {
      diagnosis: 'COVID-19'
    }
  },
  {
    conditions: {
      fever: true,
      headache: true,
      bodyAches: true
    },
    conclusion: {
      diagnosis: 'Influenza'
    }
  },
  // Add more rules here...
];

// Create a new rule engine and load the rules
const engine = new RuleJS();
engine.register(rules);

// Define the current symptoms
const facts = {
  fever: true,
  cough: true,
  shortnessOfBreath: true
};

// Run the expert system to make a diagnosis
const result = engine.execute(facts);
console.log(result.diagnosis);  // Output: COVID-19

