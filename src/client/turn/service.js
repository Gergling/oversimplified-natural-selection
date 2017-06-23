import organismService from '../organism/service'
import environmentService from '../environment/service'

const config = {
  timeout: 50
};

const status = {
  turns: 0
};

function forEachOrganism(fnc) {
  organismService.all().forEach(fnc);
}

// Procreates each organism into an adjacent environment if they're lucky.
function procreate(getAdjacency, getSterility) {
  function adjacent(organism) {
    const environments = environmentService.adjacents(organism.location());
    return environments[Math.floor(getRandomAdjacency() * environments.length)];
  }
  forEachOrganism((organism) => {
    // Get the randomly-generated adjacent environment.
    const environment = adjacent(organism);
    
    // The 'comfort' is defined as the negative of the deviation from the environment.
    const comfort = 1 - organism.deviation();
    if (getSterility() < comfort) {
      organism.procreate(environment);
    }
  });
}

// Kills off all unlucky organisms dependent on.
function die(survivalRandom) {
  forEachOrganism((organism) => {
    if (survivalRandom < organism.deviation()) {
      organism.die();
    }
  });
  organismService.clean();
}

// Start/continue the simulation.
function start() {
  // Run the appropriate simulation steps.
  procreate();
  die();
  
  // Update the status object.
  status.turns += 1;
  status.extinction = organismService.all().length === 0;
  
  // If extinction, pause.
  if (!status.extinction) {
    setTimeout(start, config.timeout);
  }
}

module.exports = {
  start, // Run this function to start/continue the simulation.
  config, // Adjust the parameters of the simulation with the config object.
  status, // Regard the status of the simulation with the status object.
  procreate,
  die,
};
