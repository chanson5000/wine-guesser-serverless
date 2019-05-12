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

  if (event.httpMethod === 'PUT') {
    const body = JSON.parse(event.body);

    wine = {
      ...wine,
      ...body
    };
  }

  return wine;
};
