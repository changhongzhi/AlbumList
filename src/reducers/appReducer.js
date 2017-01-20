import * as types from '../actions/actionTypes';
import {GetAlbumTotal} from './helper';

const initialState = {
    photos: [],
    currentAlbum: 1,
    totalAlbumNumber: 1 
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_PHOTOS_SUCCESS: 
            return {...state, photos: action.payload, totalAlbumNumber: GetAlbumTotal(action.payload)};
        case types.SET_CURRENT_ALBUM:
            return {...state, currentAlbum: action.id};
        default:
            return state;
    }
}