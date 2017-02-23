angular.module('turn').service(function (organismService) {
  function forEachOrganism(fnc) {
    organismService.all().forEach(fnc);
  }
  function procreate(random) {
    function adjacent(organism) {
      var environments = environmentService.adjacents(organism.location());
      return environments[Math.floor(random * environments.length)];
    }
    forEachOrganism(function (organism) {
      var environment = adjacent(Math.random());
      var probability = 1 - organism.deviation();
      if (Math.random() < probability) {
        organism.procreate(environment);
      }
    });
  }
  function die() {
    forEachOrganism(function (organism) {
      if (Math.random() < organism.deviation()) {
        organism.die();
      }
    });
    organismService.clean();
  }
  // If organism count === 0, simulation ends.
  function next() {
    procreate();
    die();
  }
  
  this.next = next;
});
