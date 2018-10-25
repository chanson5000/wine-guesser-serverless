import { GET_RED_WINES } from './types';
import axios from 'axios';

export const getRedWines = () => async dispatch => {
  const res = await axios.get(
    'https://yvlt1timcc.execute-api.us-east-2.amazonaws.com/develop/wines/red'
  );

  dispatch({
    type: GET_RED_WINES,
    payload: res.data
  });
};
