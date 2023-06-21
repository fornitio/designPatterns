/*
Declarative programming is a paradigm that focuses on describing the desired result of a computation rather than specifying how to achieve it. It is often used in domain-specific languages (DSLs) to create expressive and concise code that is easy to read and understand.
*/
const items = [
  { name: 'apple', price: 0.5 },
  { name: 'banana', price: 0.25 },
  { name: 'orange', price: 0.75 },
];

const purchase = (customer, ...products) => {
  return {
    customer: customer,
    items: products.map((product) => ({
      name: product,
      price: items.find((item) => item.name === product).price
    }))
  };
};

console.log(purchase('Alice', 'apple', 'orange'));
// { customer: 'Alice', items: [{ name: 'apple', price: 0.5 }, { name: 'orange', price: 0.75 }] }

/*
purchase function is a DSL that describes a customer's purchase as a collection of products. The function takes a customer name and a list of products as arguments and returns an object that represents the purchase. The function does not specify how to retrieve the price of each product, but instead declares that the price should be the price of the item with the corresponding name. This allows the purchase function to be concise and expressive, and it makes the code easier to read and understand
*/
