// Functions which allow you to "paint" your environment.

class Painter {
  constructor(width, height, map) {
    // width and height limitations
    // map is an array of environments
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
}

module.exports = {
  mapPainter: (width, height, map) => new Painter()
};
