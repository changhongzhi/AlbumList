import {GetAlbumTotal} from './helper';


it('get album total number', () => {
  const photos= [{albumId: 1}, {albumId: 2}, {albumId: 2}];
  expect(GetAlbumTotal(photos)).toBe(2);
});
