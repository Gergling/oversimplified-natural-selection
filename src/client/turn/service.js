/*
The difference between an environment's attribute and the organism is called the deviation.
Each turn, an organism with an empty adjacent space may create a child in an empty adjacent space. The probability of this is the sum of (255 - deviation) / 255 for each attribute over 3.
Each turn, an organism may die. The probability of this is the sum of the deviation / 255 for each attribute over 3.
The simulation ends when no organisms exist.
Each procreation/death roll should be logged.
*/

angular.module('turn').service(function (organismService) {
  function procreate(random) {
    function adjacent(organism) {
      var environments = environmentService.adjacents(organism.location());
      return environments[Math.floor(random * environments.length)];
    }
    organismService.all().forEach(function (organism) {
      var environment = adjacent(Math.random());
      var probability = 1 - organism.deviation();
      if (Math.random() < probability) {
        organism.procreate(environment);
      }
    });
  }
  function next() {
    procreate();
    die();
  }
});
