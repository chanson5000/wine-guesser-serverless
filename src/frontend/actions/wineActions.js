import {
  GET_RED_WINES,
  GET_WHITE_WINES,
  GET_WHITE_WINE,
  GET_RED_WINE,
  ADD_RED_WINE,
  ADD_WHITE_WINE,
  DELETE_RED_WINE,
  DELETE_WHITE_WINE
} from './types';
import axios from 'axios';

// eslint-disable-next-line no-undef
const apiEndpoint = WINE_GUESSER_API_URL;

export const getAllWines = (isRedWine = false) => async dispatch => {
  let res;
  let getURI;
  let type;

  if (isRedWine) {
    getURI = `${apiEndpoint}wines/red`;
    type = GET_RED_WINES;
  } else {
    getURI = `${apiEndpoint}wines/white`;
    type = GET_WHITE_WINES;
  }

  try {
    res = await axios.get(getURI);
  } catch {
    res.data = [];
  } finally {
    dispatch({
      type: type,
      payload: res.data
    });
  }
};

export const getRedWine = wine => async dispatch => {
  let res;
  try {
    res = await axios.get(
      `${apiEndpoint}wine/red/${wine.varietal}/${wine.world}`,
      wine
    );
  } catch {
    res.data = {};
  } finally {
    dispatch({
      type: GET_RED_WINE,
      payload: res.data
    });
  }
};

export const getWhiteWine = wine => async dispatch => {
  let res;
  try {
    res = await axios.get(
      `${apiEndpoint}wine/white/${wine.varietal}/${wine.world}`,
      wine
    );
  } catch {
    res.data = {};
  } finally {
    dispatch({
      type: GET_WHITE_WINE,
      payload: res.data
    });
  }
};

export const addWine = (wine, isRedWine = false) => async dispatch => {
  let res;
  let putURI;
  let type;

  if (isRedWine) {
    putURI = `${apiEndpoint}wines/red/${wine.varietal}/${wine.world}`;
    type = ADD_RED_WINE;
  } else {
    putURI = `${apiEndpoint}wines/white/${wine.varietal}/${wine.world}`;
    type = ADD_WHITE_WINE;
  }

  try {
    res = await axios.put(putURI, wine);
  } catch {
    res.data = {};
  } finally {
    dispatch({
      type: type,
      payload: res.data
    });
  }
};

export const deleteWine = (wine, isRedWine = false) => async dispatch => {
  let res;
  let deleteURI;
  let type;

  if (isRedWine) {
    deleteURI = `${apiEndpoint}wines/red/${wine.varietal}/${wine.world}`;
    type = DELETE_RED_WINE;
  } else {
    deleteURI = `${apiEndpoint}wines/white/${wine.varietal}/${wine.world}`;
    type = DELETE_WHITE_WINE;
  }

  try {
    res = await axios.delete(deleteURI, wine);
  } catch {
    console.error('Error encountered');
    res.data = {};
  } finally {
    dispatch({
      type: type,
      payload: wine
    });
  }
};
