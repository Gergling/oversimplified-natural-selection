// Functions which allow you to "paint" your environment.

class Painter {
  constructor(width, height, map) {
    // width and height limitations
    // map is an array of environments
    // populate map with black environments or something
  }
  single(x, y, attribute) {
    // sets a specific location to a copy of the given attribute
    // but only if it lies within the width/height
  }
  circle(x, y, radius, attribute) {
    // Paints a filled circle into the environment.
    const radiusSquared = Math.pow(radius, 2);
    // loop x-radius to x+radius = xsingle
      // edge is at Math.floor(Math.abs(Math.sqrt(radiusSquared - xsingle^2))) + 1
        // loop y-edge to y+edge = ysingle
          // single(xsingle, ysingle, attribute)
  }
  stripe(x, y, gradient, attribute) {
    // Paints a stripe across the environment.
  }
  rectangle(x1, y1, x2, y2, attribute) {
    // Paints a rectangle
  }
  background(attribute) {
    // Paints all the environments to the same attribute.
    // rectangle(0, 0, this.width, this.height, attribute)
  }
  random() {
    // Generates a completely random environment.
    // start with a background
    // then switch to any of the random functions above, from stripe, rectangle, circle or single
    // maybe this requires its own object
  }
}

module.exports = {
  createPainter: (width, height, map) => new Painter(width, height, map)
};
