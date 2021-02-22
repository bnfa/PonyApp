/**
 * Get the position of Pony, maze width and maze length and returns
 * an array object with Pony and its neighbors with their action
 * @param {int} pony Pony position
 * @param {int} mazeWidth Maze with between 15 to 25
 * @param {int} mazeLenght Maze lenght
 */
const getNeighbors = (pony, mazeWidth, mazeLenght) => {
  let neighbors = [{position: pony, action: 'stay'}];
  // West
  if (!Number.isInteger(pony / mazeWidth)) {
    neighbors.push({position: pony - 1, action: 'west'});
  }
  // East
  if (!Number.isInteger((pony + 1) / mazeWidth)) {
    neighbors.push({position: pony + 1, action: 'east'});
  }
  // North
  if (pony - mazeWidth > 0) {
    neighbors.push({position: pony - mazeWidth, action: 'north'});
  }
  // South
  if (pony + mazeWidth < mazeLenght) {
    neighbors.push({position: pony + mazeWidth, action: 'south'});
  }
  return neighbors;
};

export default getNeighbors;
