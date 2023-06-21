class Task {
  constructor(description, priority) {
    this.description = description;
    this.priority = priority;
  }
}

class TaskList {
  constructor(tasks) {
    this.tasks = tasks;
  }

  findTasks(predicate) {
    return this.tasks.filter(predicate);
  }
}

const taskList = new TaskList([
  new Task('Buy milk', 'high'),
  new Task('Do laundry', 'medium'),
  new Task('Pay bills', 'high')
]);

const highPriorityTasks = taskList.findTasks((task) => task.priority === 'high');

console.log(highPriorityTasks);  // [Task { description: 'Buy milk', priority: 'high' }, Task { description: 'Pay bills', priority: 'high' }]

/*
TaskList class has a findTasks method that takes a predicate function as an argument and returns an array of tasks that match the predicate. The predicate function is a declarative statement that defines the criteria for selecting tasks. This allows the TaskList class to express the relationships between different pieces of data (the tasks) in a declarative way and deduce new conclusions (the list of high-priority tasks) from those relationships.
*/
