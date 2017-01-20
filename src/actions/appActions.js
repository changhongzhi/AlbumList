import { CALL_API } from 'redux-api-middleware';
import * as types from './actionTypes';



export function getPhotos() {
    let endPoint = 'https://jsonplaceholder.typicode.com/photos';
    return {
        [CALL_API]: {
            endpoint: endPoint,
            method: "GET",
            types: [types.GET_PHOTOS_REQUEST, types.GET_PHOTOS_SUCCESS, types.GET_PHOTOS_FAILURE],
            headers: {'Accept': 'application/json,application/xml'}
        }
    };
}

export function onPageChange(newId) {
    return {type: types.SET_CURRENT_ALBUM, id: newId};
}