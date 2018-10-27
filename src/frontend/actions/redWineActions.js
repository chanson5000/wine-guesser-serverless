import { GET_RED_WINES } from './types';
import axios from 'axios';

const apiEndpoint = WINE_GUESSER_API_URL;

export const getRedWines = () => async dispatch => {
  const res = await axios.get(`${apiEndpoint}wines/red`);

  dispatch({
    type: GET_RED_WINES,
    payload: res.data
  });
};
