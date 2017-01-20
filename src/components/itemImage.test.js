import React from 'react';
import renderer from 'react-test-renderer';
import ItemImage from './itemImage';

test('Show url img when show image', () => {
  const component = renderer.create(
    <ItemImage url="image url" showImage={true}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Show thumburl img when not show image', () => {
  const component = renderer.create(
    <ItemImage thumbnailUrl="thumbnail image url" showImage={false}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

