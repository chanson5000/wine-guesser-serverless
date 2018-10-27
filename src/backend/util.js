export const makeValidWineObject = event => {
  const combinedParams = {
    ...event.queryStringParameters,
    ...event.pathParameters
  };

  let wine = {};

  for (const key in combinedParams) {
    wine = {
      ...wine,
      [decodeURIComponent(key)]: decodeURIComponent(combinedParams[key])
    };
  }

  if (wine.varietal === undefined) {
    wine.varietal = null;
  }
  if (wine.world === undefined) {
    wine.world = null;
  }

  return wine;
};
