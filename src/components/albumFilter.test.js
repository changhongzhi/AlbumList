import React from 'react';
import renderer from 'react-test-renderer';
import AlbumFilter from './albumFilter';

test('AlbumFilter change when page change', () => {
  const component = renderer.create(
    <AlbumFilter current={1} total={10} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});