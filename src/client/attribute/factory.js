angular.module('attribute').factory('attributeFactory', function () {
  function Attribute() {
    var data = {
      red: 0,
      green: 0,
      blue: 0
    };
    
    function mean(attributes) {
      var sum = instantiate();
      attributes.forEach(function (attribute) {
        sum.add(attribute);
      });
      return sum.divide(attributes.length);
    }
    
    function forEachData(fnc) {
      Object.keys(data).forEach(fnc);
    }
    
    function add(attribute) {
      forEachData(function (prop) {
        data[prop] += attribute[prop]();
      });
      return this;
    }
    
    function divide(number) {
      forEachData(function (prop) {
        data[prop] /= number;
      });
      return this;
    }
  }
  function instantiate() {
  }
  return instantiate;
});
