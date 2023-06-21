/*
Genetic programming: This paradigm is based on the idea of using evolutionary algorithms to generate and optimize programs automatically.
*/
class GeneticAlgorithm {
  constructor(options) {
    this.options = options;
  }

  run() {
    let population = this.options.initialPopulation;
    let fitnessFunction = this.options.fitnessFunction;
    let shouldContinue = this.options.shouldContinue;
    let mutate = this.options.mutate;
    let crossover = this.options.crossover;
    let selection = this.options.selection;

    while (shouldContinue(population)) {
      let newPopulation = [];

      for (let i = 0; i < population.length; i++) {
        let parent1 = selection(population, fitnessFunction);
        let parent2 = selection(population, fitnessFunction);
        let child = crossover(parent1, parent2);
        child = mutate(child);
        newPopulation.push(child);
      }

      population = newPopulation;
    }

    return population;
  }
}
