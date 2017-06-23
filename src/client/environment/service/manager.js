var data = {
  environments: []
}

// Returns an array of 
function adjacents(centralEnvironment) {
  const locations = [-1, 1].reduce((locations, offset) => {
    return locations.concat([
      new Location(centralEnvironment.location.x + offset, 0),
      new Location(0, centralEnvironment.location.y + offset),
    ]);
  }, []);

  // Find all environments adjacent to the location.
  return data.environments.filter((environment) => {
    return locations.filter(location => environment.location.x === location.x && environment.location.y === location.y);
  });
}

function meanAttributes(environments) {
  return attributeService.mean(environments.map(function (environment) {
    return environment.attributes();
  }));
}

module.exports = {
  data,
  adjacents
};
