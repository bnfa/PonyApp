import React from 'react';
import renderer from 'react-test-renderer';
import MenuButton from './MenuButton';

test('MenuButton renders correclty', () => {
  const tree = renderer
    .create(<MenuButton lable="Start" onPress={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
