import getNeighbors from './Logic';

const withThreeNeighbors = [
  {
    action: 'stay',
    position: 0,
  },
  {
    action: 'east',
    position: 1,
  },
  {
    action: 'south',
    position: 15,
  },
];

const withFiveNeighbors = [
  {
    action: 'stay',
    position: 100,
  },
  {
    action: 'west',
    position: 99,
  },
  {
    action: 'east',
    position: 101,
  },
  {
    action: 'north',
    position: 85,
  },
  {
    action: 'south',
    position: 115,
  },
];
test('Nighbors Values with pony at Zero', () => {
  const retrunVal = getNeighbors(0, 15, 225);
  expect(retrunVal).toStrictEqual(withThreeNeighbors);
});

test('Nighbors value with pony at 100', () => {
  const retrunVal = getNeighbors(100, 15, 225);
  expect(retrunVal).toStrictEqual(withFiveNeighbors);
});
