/*
The Law of Demeter is a principle that advises minimizing the number of objects an object communicates with, and minimizing the number of functions it calls on those objects. In other words, an object should only communicate with its immediate neighbors and should not have knowledge of the inner workings of other objects in the system.
*/

class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }
  
  getName() {
    return this.name;
  }
  
  getCourse() {
    return this.course;
  }
}

class StudentRepository {
  constructor() {
    this.students = [];
  }
  
  addStudent(student) {
    this.students.push(student);
  }
  
  getStudentNames() {
    return this.students.map(student => student.getName());
  }
}

const student1 = new Student('John', 'Computer Science');
const student2 = new Student('Alice', 'Business');

const repository = new StudentRepository();
repository.addStudent(student1);
repository.addStudent(student2);

console.log(repository.getStudentNames()); // ['John', 'Alice']

/*
In this example, the StudentRepository class communicates only with the Student objects it stores, and it only calls the getName() function on those objects. It does not have knowledge of the inner workings of the Student class or any other functions that the Student class may have. This helps to minimize the dependencies between the two classes and makes it easier to modify or extend them independently.
*/
