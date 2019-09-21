import axios from 'axios';

// eslint-disable-next-line no-undef
const apiEndpoint = WINE_GUESSER_API_URL;

export async function getAllWines(isRedWine = false) {
  const getURI = isRedWine === true
    ? `${apiEndpoint}wines/red`
    : `${apiEndpoint}wines/white`;

  let response;
  try {
    response = await axios.get(getURI);
    console.dir(response);
  } catch (e) {
    if (e.response) {
      console.error(`Failed call with: ${e.response.code}`);
      console.dir(e.response.data);
    } else {
      console.error('No response was received.');
    }
    throw e;
  }
  return response.data;
}

export async function addWine(wine, isRedWine = false) {
  const putURI =
    isRedWine === true
      ? `${apiEndpoint}wines/red/${wine.varietal}/${wine.world}`
      : `${apiEndpoint}wines/white/${wine.varietal}/${wine.world}`;
  console.log('Putting wine: ');
  console.log(wine);

  let response;
  try {
    response = await axios.put(putURI, wine);
  } catch (e) {
    if (e.response) {
      console.error(`Failed call with: ${e.response.data}`);
      console.dir(e.response);
    } else {
      console.error('No response was received.');
    }
    throw e;
  }
  return response.data;
}

export async function deleteWine(wine, isRedWine = false) {
  const deleteURI =
    isRedWine === true
      ? `${apiEndpoint}wines/red/${wine.varietal}/${wine.world}`
      : `${apiEndpoint}wines/white/${wine.varietal}/${wine.world}`;

  let response;
  try {
    response = await axios.delete(deleteURI, wine);
  } catch (e) {
    if (e.response) {
      console.error(`Failed call with: ${e.response.code}`);
      console.dir(e.response.data);
    } else {
      console.error('No response was received.');
    }
  }
  return response.data;
}

export async function getWine(wine, isRedWine = false) {
  const getURI =
    isRedWine === true
      ? `${apiEndpoint}wines/red/${wine.varietal}/${wine.world}`
      : `${apiEndpoint}wines/white/${wine.varietal}/${wine.world}`;

  let response;
  try {
    response = await axios.get(getURI, wine);
  } catch (e) {
    if (e.response) {
      console.error(`Failed call with : ${e.response.code}`);
      console.dir(e.response.data);
    } else {
      console.error('No response was received.');
    }
  }
  return response.data[0];
}
