/*
scholarshipRules object contains a set of functions that represent different rules for determining scholarship eligibility. The checkEligibility function iterates over the rules and applies them to the given GPA and test score, returning a message indicating the result
*/
const scholarshipRules = {
  rule1: (gpa, testScore) => gpa > 3.5 && testScore > 600,
  rule2: (gpa, testScore) => gpa > 3.0 && testScore > 700,
  rule3: (gpa, testScore) => gpa > 2.5 && testScore > 800,
  rule4: (gpa, testScore) => gpa > 2.0
};

function checkEligibility(gpa, testScore) {
  for (const [name, rule] of Object.entries(scholarshipRules)) {
    if (rule(gpa, testScore)) {
      return `Eligible for scholarship according to: "${name}"`;
    }
  }
  return 'Not eligible for scholarship';
}
console.log(checkEligibility(3, 900));