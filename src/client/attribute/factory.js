class Attribute {
  constructor() {
    this.data = {
      red: 0,
      green: 0,
      blue: 0
    };
  }

  forEachData(fnc) {
    Object.keys(this.data).forEach(fnc);
  }

  add(attribute) {
    forEachData(function (prop) {
      this.data[prop] += attribute.data[prop]();
    });
    return this;
  }

  divide(number) {
    forEachData(function (prop) {
      this.data[prop] /= number;
    });
    return this;
  }
}

return () => new Attribute();
