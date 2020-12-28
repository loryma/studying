import { SET_RECEPIENT } from './actionTypes';

export const setRecepient = id => ({
    type:  SET_RECEPIENT,
    payload: {
        id
    },
});