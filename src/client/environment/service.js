angular.module('environment').service('environmentService', function (attributeService) {
  var data = {
    environments: []
  }

  function adjacents(location) {
    // Find all environments adjacent to the location.
    // Return as an array.
  }
  
  function meanAttributes(environments) {
    return attributeService.mean(environments.map(function (environment) {
      return environment.attributes();
    }));
  }
});
