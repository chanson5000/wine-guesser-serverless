import { GET_RED_WINES } from './types';
import axios from 'axios';

const apiEndpoint = "https://9vqlpxuyhl.execute-api.us-east-2.amazonaws.com/Prod/";

export const getRedWines = () => async dispatch => {
  // const res = await axios.get(
  //   'https://yvlt1timcc.execute-api.us-east-2.amazonaws.com/develop/wines/red'
  // );

  const res = await axios.get(
      `${apiEndpoint}wines/red`
  );

  dispatch({
    type: GET_RED_WINES,
    payload: res.data
  });
};
