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
