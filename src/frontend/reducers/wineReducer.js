import {
  GET_RED_WINES,
  GET_WHITE_WINES,
  GET_RED_WINE,
  GET_WHITE_WINE,
  ADD_RED_WINE,
  ADD_WHITE_WINE,
  DELETE_RED_WINE,
  DELETE_WHITE_WINE
} from '../actions/types';

const initialState = { wines: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RED_WINES:
      return {
        ...state,
        wines: action.payload
      };
    case GET_WHITE_WINES:
      return {
        ...state,
        wines: action.payload
      };
    case GET_RED_WINE:
      return {
        ...state,
        wines: action.payload
      };
    case GET_WHITE_WINE:
      return {
        ...state,
        wines: action.payload
      };
    case ADD_RED_WINE:
      return {
        ...state,
        wines: [action.payload, ...state.wines]
      };
    case ADD_WHITE_WINE:
      return {
        ...state,
        wines: [action.payload, ...state.wines]
      };
    case DELETE_RED_WINE:
      return {
        ...state,
        wines: state.wines.filter(
          wine =>
            wine.varietal !== action.payload.varietal &&
            wine.world !== action.payload.world
        )
      };
    case DELETE_WHITE_WINE:
      return {
        ...state,
        wines: state.wines
      };
    default:
      return state;
  }
}
