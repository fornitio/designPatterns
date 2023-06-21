const users = [
  { name: 'Alice', age: 25, location: 'New York' },
  { name: 'Bob', age: 30, location: 'London' },
  { name: 'Charlie', age: 35, location: 'Paris' },
];

const query = (users) => ({
  where: (predicate) => query(users.filter(predicate)),
  select: (transform) => users.map(transform),
  execute: () => users,
});

const result = query(users)
  .where((user) => user.age > 30)
  .select((user) => user.name)
  .execute();

console.log(result);  // ['Charlie']

/*
query function creates a DSL that allows users to specify a series of operations on a collection of objects (the users array). The DSL provides where, select, and execute methods that allow users to filter the collection, transform the objects, and execute the query, respectively.

*/
