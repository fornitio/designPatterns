/*
Agent-based programming is a paradigm that is based on the idea of creating autonomous agents that can act independently and make their own decisions. In this paradigm, the focus is on creating individual agents that are capable of interacting with each other and the environment, rather than on writing a single program that specifies a set of instructions to be followed.
*/
class Agent {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.sayHello();
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
    console.log(`${this.name} position [${this.x}, ${this.y}]`);
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Environment {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.agents = [];
  }
  addAgent(agent) {
    this.agents.push(agent);
  }
  update() {
    this.agents.forEach(agent => {
      agent.move(Math.random() * 2 - 1, Math.random() * 2 - 1);
    });
  }
}

const env = new Environment(10, 10);
const agent1 = new Agent("Alice", 0, 0);
const agent2 = new Agent("Bob", 5, 5);
env.addAgent(agent1);
env.addAgent(agent2);
env.update();

/*
Agent class represents an individual agent, and the act method defines its behavior. The Environment class represents the overall environment in which the agents exist, and the addAgent and step methods allow you to add agents to the environment and advance the state of the environment by one time step, respectively. The step method causes all the agents to act by calling the act method on each of them.
*/
