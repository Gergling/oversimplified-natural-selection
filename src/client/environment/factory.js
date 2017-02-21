angular.module('environment').factory(function (attributeFactory) {
  function Environment() {
    var data = {
      attributes: attributeFactory()
    };
    
    function attributes(attributesInstance) {
      if (attributesInstance !== undefined) {
        data.attributes.set(attributesInstance);
      }
      return data.attributes;
    }
    
    this.attributes = attributes;
  }
  function instantiate(location, attributes) {
    var environment = new Environment();
    return environment
      .location(location)
      .attributes(attributes);
  }
  return instantiate;
});
