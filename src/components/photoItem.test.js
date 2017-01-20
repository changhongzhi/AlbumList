import React from 'react';
import renderer from 'react-test-renderer';
import PhotoItem from './photoItem';

test('render default not show image', () => {
    const viewport = {top: 500, height: 950};
  const component = renderer.create(
    <PhotoItem title="photo title" url="url" thumbnailUrl="thumbnailUrl" viewport={viewport}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render when show image', () => {
    const viewport = {top: 500, height: 950};
  const component = renderer.create(
    <PhotoItem title="photo title" url="url" thumbnailUrl="thumbnailUrl" showImage={true} viewport={viewport}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should be able to update position ', () => {
    const viewport = {top: 500, height: 950};
  const component = renderer.create(
    <PhotoItem title="photo title" url="url" thumbnailUrl="thumbnailUrl" viewport={viewport} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
