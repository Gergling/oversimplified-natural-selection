class Location {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }
}

module.exports = (x, y) => new Location(x, y);
