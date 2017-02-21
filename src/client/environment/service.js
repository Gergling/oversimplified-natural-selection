angular.module('environment').service('environmentService', function () {
  var data = {
    environments: []
  }

  function adjacents(location) {
    // Find all environments adjacent to the location.
    // Return as an array.
  }
  
  function meanAttributes(environments) {
    var sum = attributeFactory();
    environments.forEach(function (environment) {
      sum.add(environment.attributes());
    });
    return sum.divide(environments.length);
  }
});
