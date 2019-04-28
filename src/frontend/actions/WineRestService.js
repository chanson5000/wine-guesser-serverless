import axios from 'axios';

// eslint-disable-next-line no-undef
const apiEndpoint = WINE_GUESSER_API_URL;

export const getAllWines = (isRedWine = false) => {
  return new Promise((resolve, reject) => {
    const getURI =
      isRedWine === true
        ? `${apiEndpoint}wines/red`
        : `${apiEndpoint}wines/white`;

    axios
      .get(getURI)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        if (error.response) {
          console.log(`Failed call with: ${error.response.code}`);
          console.log(error.response.data);
        } else {
          console.log('No response was received.');
        }
        reject(error);
      });
  });
};

export const addWine = (wine, isRedWine = false) => {
  return new Promise((resolve, reject) => {
    const putURI =
      isRedWine === true
        ? `${apiEndpoint}wines/red/${wine.varietal}/${wine.world}`
        : `${apiEndpoint}wines/white/${wine.varietal}/${wine.world}`;
    axios
      .put(putURI, wine)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        if (error.response) {
          console.log(`Failed call with: ${error.response.code}`);
          console.log(error.response);
        } else {
          console.log('No response was received.');
        }
        reject(error);
      })
  });
};

export const deleteWine = (wine, isRedWine = false) => {
  return new Promise((resolve, reject) => {
    const deleteURI =
      isRedWine === true
        ? `${apiEndpoint}wines/red/${wine.varietal}/${wine.world}`
        : `${apiEndpoint}wines/white/${wine.varietal}/${wine.world}`;

    axios
      .delete(deleteURI, wine)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        if (error.response) {
          console.log(`Failed call with: ${error.response.code}`);
          console.log(error.response.data);
        } else {
          console.log('No response was received.');
        }
        reject(error);
      });
  });
};

