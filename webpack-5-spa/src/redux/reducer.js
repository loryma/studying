import * as actionTypes from './actionTypes';

const initialState = 'AnN7n46VFz5AyNHhqsGg';

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_RECEPIENT:
      return action.payload.id;
    default: 
      return state;
  }
};

export default reducer;