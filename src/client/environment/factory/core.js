class Environment {
  constructor(location, attribute) {
    this.location = location;
    this.attribute = attribute;
  }
}

module.exports = (location, attributes) => new Environment(location, attributes);
