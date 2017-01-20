import appReducer from './appReducer';
import * as types from '../actions/actionTypes';


test('Should set current album when passing SET_CURRENT_ALBUM', () => {
// arrange
  const initialState = {
        photos: [],
        currentAlbum: 1,
        totalAlbumNumber: 1 
    }
    const action = {type: types.SET_CURRENT_ALBUM, id: 4};
    const newState = appReducer(initialState, action);

    expect(newState.currentAlbum).toBe(4);
});

test('Should set photos and totalAlbumNumber when passing GET_PHOTOS_SUCCESS', () => {
// arrange
  const initialState = {
        photos: [],
        currentAlbum: 1,
        totalAlbumNumber: 1 
    }
    const payload = [{albumId: 1}, {albumId: 2}, {albumId: 2}, {albumId: 3}];
    const action = {type: types.GET_PHOTOS_SUCCESS, payload: payload};
    const newState = appReducer(initialState, action);

    expect(newState.photos.length).toBe(4);
    expect(newState.totalAlbumNumber).toBe(3);
});
