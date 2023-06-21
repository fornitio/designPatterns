/*
simple weather prediction system
*/
const rules = [
  {
    conditions: {
      temperature: "cold",
      sky: "sunny"
    },
    action: "It will be a cold, sunny day."
  },
  {
    conditions: {
      temperature: "warm",
      sky: "cloudy"
    },
    action: "It will be a warm, cloudy day."
  },
  {
    conditions: {
      temperature: "hot",
      sky: "sunny"
    },
    action: "It will be a hot, sunny day."
  }
];
function predictWeather(conditions) {
  for (const rule of rules) {
    let match = true;
    for (const key in rule.conditions) {
      if (rule.conditions[key] !== conditions[key]) {
        match = false;
        break;
      }
    }
    if (match) {
      return rule.action;
    }
  }
  return "No matching rule found.";
}

console.log(predictWeather({ temperature: "cold", sky: "sunny" }));
// Output: "It will be a cold, sunny day."

console.log(predictWeather({ temperature: "warm", sky: "cloudy" }));
// Output: "It will be a warm, cloudy day."

console.log(predictWeather({ temperature: "hot", sky: "sunny" }));
// Output: "It will be a hot, sunny day."

/*
predictWeather function takes an input object containing the current weather conditions and returns the appropriate action based on the matching rule
*/

