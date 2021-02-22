import React from 'react';
import renderer from 'react-test-renderer';
import ActionCell from './ActionCell';

test('ActionCell renders correctly', () => {
  const tree = renderer
    .create(
      <ActionCell
        borders={['north', 'west']}
        isDomokun={true}
        isEndPoint={false}
        isPony={false}
        action="stay"
        onPress={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
