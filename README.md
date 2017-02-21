# oversimplified-natural-selection
(Conceptual) An oversimplified simulation of natural selection.

* The game consists of organisms and environments.
* Each consists of three attributes: red, green and blue.
* Each environment can contain 0 or 1 organisms. Each organism is in an environment.
* The difference between an environment's attribute and the organism is called the deviation.
* Each turn, an organism with an empty adjacent space may create a child in an empty adjacent space. The probability of this is the sum of (255 - deviation) / 255 for each attribute over 3.
* Each turn, an organism may die. The probability of this is the sum of the deviation / 255 for each attribute over 3.
* The simulation ends when no organisms exist.
* Each procreation/death roll should be logged.

# Map Generation

* To generate a map, an environment and a single organism is created at 0, 0.
* Each environment tile is created spiralling out from 0, 0 until a square from -9 to 9 in both dimensions is created.
* Each environment tile is created from the average scores of surrounding tile attributes, with a random -1, 0 or +1 added.
