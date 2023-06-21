class Agent {
  constructor(name) {
    this.name = name;
    this.busy = false;
  }

  performTask(task) {
    console.log(`Agent ${this.name} is performing task: ${task}`);
  }
}

class Environment {
  constructor() {
    this.agents = [];
  }

  addAgent(agent) {
    this.agents.push(agent);
  }

  assignTask(task) {
    const availableAgents = this.agents.filter(agent => !agent.busy);
    if (availableAgents.length > 0) {
      const agent = availableAgents[0];
      agent.busy = true;
      agent.performTask(task);
    } else {
      console.log(`No available agents to perform task: ${task}`);
    }
  }
}

const environment = new Environment();

const agent1 = new Agent("Alice");
const agent2 = new Agent("Bob");
const agent3 = new Agent("Eve");

environment.addAgent(agent1);
environment.addAgent(agent2);
environment.addAgent(agent3);

environment.assignTask("Update database");
environment.assignTask("Send email to client");
environment.assignTask("Generate report");
environment.assignTask("Prepare demo");
