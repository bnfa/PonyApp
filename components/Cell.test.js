import React from 'react';
import renderer from 'react-test-renderer';
import Cell from './Cell';

test('Cell renders correctly', () => {
  const tree = renderer
    .create(
      <Cell
        borders={['north']}
        isDomokun={true}
        isEndPoint={false}
        isPony={false}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
