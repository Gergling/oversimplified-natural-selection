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

// 
function procreate(random) {
  function adjacent(organism) {
    const environments = environmentService.adjacents(organism.location());
    return environments[Math.floor(random * environments.length)];
  }
  forEachOrganism(function (organism) {
    const environment = adjacent(Math.random());
    const probability = 1 - organism.deviation();
    if (Math.random() < probability) {
      organism.procreate(environment);
    }
  });
}

// Kills off all unlucky organisms.
function die() {
  forEachOrganism((organism) => {
    if (Math.random() > organism.deviation()) {
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
  status // Regard the status of the simulation with the status object.
};
