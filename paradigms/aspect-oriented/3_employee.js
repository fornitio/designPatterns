class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  @log
  getSalary() {
    return this.salary;
  }
}

function log(target, name, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function() {
    console.log(`Calling ${name} with arguments:`, arguments);
    const result = originalMethod.apply(this, arguments);
    console.log(`Result of ${name}:`, result);
    return result;
  };
  return descriptor;
}

const employee = new Employee('Alice', 10000);
console.log(employee.getSalary());  // Outputs: 10000

/*
log function is an aspect that adds logging functionality to the getSalary method of the Employee class. The log function is applied to the method using an ES6 decorator, which allows it to be injected into the method without modifying the method itself. This separation of concerns allows the logging functionality to be modularized and applied to multiple methods in the program without duplicating code.
*/
