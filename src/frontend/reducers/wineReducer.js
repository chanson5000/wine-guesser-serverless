import { GET_RED_WINES } from '../actions/types';

const initialState = { wines: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RED_WINES:
      return {
        ...state,
        wines: action.payload
      };
    default:
      return state;
  }
}
