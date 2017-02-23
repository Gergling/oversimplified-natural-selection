angular.module('organism').factory('organismFactory', function () {
  function Organism() {
    function deviation() {
      return attributeService.mean([environment().attribute(), attribute()]).divide(255);
    }
  }
  function instantiate() {
  }
  return instantiate;
});
