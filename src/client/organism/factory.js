import attributeService from '../attribute/service'
import attributeFactory from '../attribute/factory'

class Organism {
  constructor(environment) {
    this.attribute = attributeFactory();
    this.environment = environment;
  }
  deviation() {
    return attributeService.mean([this.environment.attribute, this.attribute]).divide(255);
  }
}

module.exports = () => new Organism();
