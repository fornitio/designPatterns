class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Company {
  constructor(employees) {
    this.employees = employees;
  }

  query(expression) {
    const tokens = expression.split(' ');
    if (tokens[0] === 'find') {
      if (tokens[1] === 'employees') {
        if (tokens[2] === 'where') {
          const key = tokens[3];
          const comparator = tokens[4];
          const value = tokens[5];
          return this.employees.filter((employee) => {
            return eval(`employee.${key} ${comparator} ${value}`);
          });
        }
      }
    }
    throw new Error('Invalid expression');
  }
}

const company = new Company([
  new Employee('Alice', 75000),
  new Employee('Bob', 80000),
  new Employee('Charlie', 90000),
]);

const highPaidEmployees = company.query('find employees where salary > 80000');

console.log(highPaidEmployees);  // [Employee { name: 'Charlie', salary: 90000 }]

/*
Company class has a query method that takes a declarative expression as an argument and returns a list of employees that match the criteria specified in the expression. The expression is a DSL that allows the user to describe the desired result in a natural and intuitive way, without having to worry about the implementation details of how the result is obtained. This makes the DSL easy to use and maintain, even for people who are not programmers
*/
